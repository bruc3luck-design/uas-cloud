<?php
// ============================================================
// public/dashboard.php
// Halaman dashboard utama — hanya bisa diakses setelah login
// ============================================================

require_once __DIR__ . '/../src/auth.php';
require_once __DIR__ . '/../src/db.php';
require_once __DIR__ . '/../src/helpers.php';

startSecureSession();
requireLogin(); // Guard: redirect ke login jika belum masuk

$user = currentUser();
$pdo  = DB::get();

// ---- Statistik ringkas ----
$statsStmt = $pdo->prepare('
    SELECT
        COUNT(*)                                    AS total,
        SUM(status = "todo")                        AS todo,
        SUM(status = "in_progress")                 AS in_progress,
        SUM(status = "done")                        AS done,
        SUM(priority = "high" AND status != "done") AS urgent
    FROM tasks WHERE user_id = ?
');
$statsStmt->execute([$user['id']]);
$stats = $statsStmt->fetch();

// ---- Daftar tasks ----
$filterStatus   = $_GET['status']   ?? '';
$filterPriority = $_GET['priority'] ?? '';
$search         = sanitizeInput($_GET['q'] ?? '', 100);

$where  = ['user_id = ?'];
$params = [$user['id']];

if ($filterStatus && in_array($filterStatus, ['todo', 'in_progress', 'done'], true)) {
    $where[]  = 'status = ?';
    $params[] = $filterStatus;
}
if ($filterPriority && in_array($filterPriority, ['low', 'medium', 'high'], true)) {
    $where[]  = 'priority = ?';
    $params[] = $filterPriority;
}
if ($search !== '') {
    $where[]  = '(title LIKE ? OR description LIKE ?)';
    $params[] = '%' . $search . '%';
    $params[] = '%' . $search . '%';
}

$sql   = 'SELECT * FROM tasks WHERE ' . implode(' AND ', $where) . ' ORDER BY
            FIELD(priority,"high","medium","low"),
            FIELD(status,"in_progress","todo","done"),
            created_at DESC';
$stmt  = $pdo->prepare($sql);
$stmt->execute($params);
$tasks = $stmt->fetchAll();

// ---- Render halaman ----
echo pageHeader('Dashboard', 'dashboard');
?>
<!-- ===== NAVBAR ===== -->
<nav class="navbar">
  <div class="nav-brand">
    <span class="nav-icon">&#9729;</span>
    <span><?= e(APP_NAME) ?></span>
  </div>
  <div class="nav-right">
    <span class="nav-user">&#128100; <?= e($user['full_name'] ?: $user['username']) ?></span>
    <a href="/logout.php" class="btn btn-outline btn-sm">&#128275; Logout</a>
  </div>
</nav>

<!-- ===== MAIN ===== -->
<main class="main-content">

  <!-- Flash message -->
  <?= renderFlash() ?>

  <!-- Judul halaman -->
  <div class="page-header">
    <div>
      <h2 class="page-title">&#128203; Dashboard Tasks</h2>
      <p class="page-sub">Selamat datang, <strong><?= e($user['full_name'] ?: $user['username']) ?></strong>!</p>
    </div>
    <a href="/create.php" class="btn btn-primary">&#43; Tambah Task</a>
  </div>

  <!-- ===== STATISTIK ===== -->
  <div class="stats-grid">
    <div class="stat-card stat-total">
      <div class="stat-value"><?= (int)$stats['total'] ?></div>
      <div class="stat-label">Total Tasks</div>
    </div>
    <div class="stat-card stat-todo">
      <div class="stat-value"><?= (int)$stats['todo'] ?></div>
      <div class="stat-label">To Do</div>
    </div>
    <div class="stat-card stat-progress">
      <div class="stat-value"><?= (int)$stats['in_progress'] ?></div>
      <div class="stat-label">In Progress</div>
    </div>
    <div class="stat-card stat-done">
      <div class="stat-value"><?= (int)$stats['done'] ?></div>
      <div class="stat-label">Done</div>
    </div>
    <div class="stat-card stat-urgent">
      <div class="stat-value"><?= (int)$stats['urgent'] ?></div>
      <div class="stat-label">Urgent (High)</div>
    </div>
  </div>

  <!-- ===== FILTER ===== -->
  <div class="filter-bar">
    <form method="GET" action="/dashboard.php" class="filter-form">
      <input
        type="text"
        name="q"
        class="form-input form-input-sm"
        placeholder="&#128269; Cari task..."
        value="<?= e($search) ?>"
        maxlength="100"
      >
      <select name="status" class="form-select form-select-sm">
        <option value="">Semua Status</option>
        <option value="todo"        <?= $filterStatus === 'todo'        ? 'selected' : '' ?>>To Do</option>
        <option value="in_progress" <?= $filterStatus === 'in_progress' ? 'selected' : '' ?>>In Progress</option>
        <option value="done"        <?= $filterStatus === 'done'        ? 'selected' : '' ?>>Done</option>
      </select>
      <select name="priority" class="form-select form-select-sm">
        <option value="">Semua Prioritas</option>
        <option value="high"   <?= $filterPriority === 'high'   ? 'selected' : '' ?>>High</option>
        <option value="medium" <?= $filterPriority === 'medium' ? 'selected' : '' ?>>Medium</option>
        <option value="low"    <?= $filterPriority === 'low'    ? 'selected' : '' ?>>Low</option>
      </select>
      <button type="submit" class="btn btn-secondary btn-sm">Filter</button>
      <?php if ($filterStatus || $filterPriority || $search): ?>
        <a href="/dashboard.php" class="btn btn-outline btn-sm">&#10005; Reset</a>
      <?php endif; ?>
    </form>
  </div>

  <!-- ===== TABEL TASKS ===== -->
  <div class="table-card">
    <?php if (empty($tasks)): ?>
      <div class="empty-state">
        <div class="empty-icon">&#128203;</div>
        <p>Belum ada task. <a href="/create.php">Tambah task pertama!</a></p>
      </div>
    <?php else: ?>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Judul Task</th>
              <th>Status</th>
              <th>Prioritas</th>
              <th>Deadline</th>
              <th>Dibuat</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($tasks as $i => $task): ?>
            <tr class="<?= $task['status'] === 'done' ? 'row-done' : '' ?>">
              <td class="td-num"><?= $i + 1 ?></td>
              <td class="td-title">
                <div class="task-title"><?= e($task['title']) ?></div>
                <?php if ($task['description']): ?>
                  <div class="task-desc"><?= e(mb_substr($task['description'], 0, 80)) ?><?= mb_strlen($task['description']) > 80 ? '…' : '' ?></div>
                <?php endif; ?>
              </td>
              <td><?= statusBadge($task['status']) ?></td>
              <td><?= priorityBadge($task['priority']) ?></td>
              <td class="td-date"><?= formatDate($task['due_date']) ?></td>
              <td class="td-date"><?= formatDate($task['created_at']) ?></td>
              <td class="td-actions">
                <a href="/edit.php?id=<?= (int)$task['id'] ?>" class="btn btn-sm btn-warning" title="Edit">&#9998; Edit</a>
                <a href="/delete.php?id=<?= (int)$task['id'] ?>"
                   class="btn btn-sm btn-danger"
                   title="Hapus"
                   onclick="return confirm('Yakin hapus task ini?')">&#128465; Hapus</a>
              </td>
            </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        Menampilkan <strong><?= count($tasks) ?></strong> task.
      </div>
    <?php endif; ?>
  </div>

</main>

<?= pageFooter() ?>
