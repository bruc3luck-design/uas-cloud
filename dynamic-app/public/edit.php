<?php
// ============================================================
// public/edit.php
// Form edit task yang sudah ada (U dari CRUD)
// ============================================================

require_once __DIR__ . '/../src/auth.php';
require_once __DIR__ . '/../src/db.php';
require_once __DIR__ . '/../src/helpers.php';

startSecureSession();
requireLogin();

$user = currentUser();
$pdo  = DB::get();

// Ambil ID dari query string
$id = (int)($_GET['id'] ?? 0);
if ($id <= 0) {
    setFlash('error', 'ID task tidak valid.');
    redirect('/dashboard.php');
}

// Ambil task — pastikan milik user yang login
$stmt = $pdo->prepare('SELECT * FROM tasks WHERE id = ? AND user_id = ? LIMIT 1');
$stmt->execute([$id, $user['id']]);
$task = $stmt->fetch();

if (!$task) {
    setFlash('error', 'Task tidak ditemukan atau Anda tidak memiliki akses.');
    redirect('/dashboard.php');
}

$errors = [];
$input  = [
    'title'       => $task['title'],
    'description' => $task['description'] ?? '',
    'status'      => $task['status'],
    'priority'    => $task['priority'],
    'due_date'    => $task['due_date'] ?? '',
];

// Proses form POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input['title']       = sanitizeInput($_POST['title']       ?? '', 150);
    $input['description'] = sanitizeInput($_POST['description'] ?? '', 2000);
    $input['status']      = $_POST['status']   ?? 'todo';
    $input['priority']    = $_POST['priority'] ?? 'medium';
    $input['due_date']    = sanitizeInput($_POST['due_date'] ?? '', 10);

    // Validasi
    if (empty($input['title'])) {
        $errors[] = 'Judul task wajib diisi.';
    }
    if (!in_array($input['status'], ['todo', 'in_progress', 'done'], true)) {
        $errors[] = 'Status tidak valid.';
    }
    if (!in_array($input['priority'], ['low', 'medium', 'high'], true)) {
        $errors[] = 'Prioritas tidak valid.';
    }
    if ($input['due_date'] && !isValidDate($input['due_date'])) {
        $errors[] = 'Format tanggal deadline tidak valid.';
    }

    if (empty($errors)) {
        $upd = $pdo->prepare('
            UPDATE tasks
               SET title       = ?,
                   description = ?,
                   status      = ?,
                   priority    = ?,
                   due_date    = ?
             WHERE id = ? AND user_id = ?
        ');
        $upd->execute([
            $input['title'],
            $input['description'] ?: null,
            $input['status'],
            $input['priority'],
            $input['due_date'] ?: null,
            $id,
            $user['id'],
        ]);

        setFlash('success', 'Task "' . $input['title'] . '" berhasil diperbarui!');
        redirect('/dashboard.php');
    }
}

echo pageHeader('Edit Task', 'dashboard');
?>
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

<main class="main-content">
  <?= renderFlash() ?>

  <div class="page-header">
    <div>
      <h2 class="page-title">&#9998; Edit Task</h2>
      <p class="page-sub"><a href="/dashboard.php">&#8592; Kembali ke Dashboard</a></p>
    </div>
    <div class="badge-id">ID #<?= $id ?></div>
  </div>

  <!-- Error list -->
  <?php if (!empty($errors)): ?>
    <div class="alert alert-error">
      <span class="alert-icon">&#9888;</span>
      <ul class="error-list">
        <?php foreach ($errors as $err): ?>
          <li><?= e($err) ?></li>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>

  <div class="form-card">
    <form method="POST" action="/edit.php?id=<?= $id ?>" novalidate>

      <div class="form-group">
        <label for="title" class="form-label">Judul Task <span class="required">*</span></label>
        <input type="text" id="title" name="title" class="form-input"
               placeholder="Judul task"
               value="<?= e($input['title']) ?>"
               maxlength="150" required>
      </div>

      <div class="form-group">
        <label for="description" class="form-label">Deskripsi</label>
        <textarea id="description" name="description" class="form-textarea"
                  placeholder="Detail task..." rows="4"
                  maxlength="2000"><?= e($input['description']) ?></textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="status" class="form-label">Status <span class="required">*</span></label>
          <select id="status" name="status" class="form-select">
            <option value="todo"        <?= $input['status'] === 'todo'        ? 'selected' : '' ?>>&#9744; To Do</option>
            <option value="in_progress" <?= $input['status'] === 'in_progress' ? 'selected' : '' ?>>&#9654; In Progress</option>
            <option value="done"        <?= $input['status'] === 'done'        ? 'selected' : '' ?>>&#10003; Done</option>
          </select>
        </div>

        <div class="form-group">
          <label for="priority" class="form-label">Prioritas <span class="required">*</span></label>
          <select id="priority" name="priority" class="form-select">
            <option value="low"    <?= $input['priority'] === 'low'    ? 'selected' : '' ?>>&#11015; Low</option>
            <option value="medium" <?= $input['priority'] === 'medium' ? 'selected' : '' ?>>&#9654; Medium</option>
            <option value="high"   <?= $input['priority'] === 'high'   ? 'selected' : '' ?>>&#11014; High</option>
          </select>
        </div>

        <div class="form-group">
          <label for="due_date" class="form-label">Deadline</label>
          <input type="date" id="due_date" name="due_date" class="form-input"
                 value="<?= e($input['due_date']) ?>">
        </div>
      </div>

      <div class="form-actions">
        <a href="/dashboard.php" class="btn btn-outline">&#10005; Batal</a>
        <button type="submit" class="btn btn-primary">&#128190; Update Task</button>
      </div>

    </form>
  </div>

  <!-- Info dibuat/diupdate -->
  <div class="meta-info">
    <span>&#128336; Dibuat: <?= formatDate($task['created_at']) ?></span>
    <span>&#9998; Diperbarui: <?= formatDate($task['updated_at']) ?></span>
  </div>

</main>

<?= pageFooter() ?>
