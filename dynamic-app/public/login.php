<?php
// ============================================================
// public/login.php
// Halaman login admin
// ============================================================

require_once __DIR__ . '/../src/auth.php';
require_once __DIR__ . '/../src/helpers.php';

startSecureSession();

// Jika sudah login, langsung ke dashboard
if (isLoggedIn()) {
    redirect('/dashboard.php');
}

$error = '';

// Tangani pesan GET
$msgMap = [
    'unauthorized' => 'Silakan login terlebih dahulu.',
    'timeout'      => 'Sesi Anda telah habis. Silakan login kembali.',
    'loggedout'    => 'Anda telah berhasil logout.',
];
$info = $msgMap[$_GET['msg'] ?? ''] ?? '';

// Proses form POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = sanitizeInput($_POST['username'] ?? '', 50);
    $password = $_POST['password'] ?? '';

    $result = attemptLogin($username, $password);

    if ($result['success']) {
        setFlash('success', 'Selamat datang, ' . currentUser()['full_name'] . '!');
        redirect('/dashboard.php');
    } else {
        $error = $result['message'];
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login &mdash; <?= e(APP_NAME) ?></title>
  <link rel="stylesheet" href="/assets/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#9729;</text></svg>">
</head>
<body class="login-body">

<div class="login-wrapper">
  <div class="login-card">

    <!-- Logo / Header -->
    <div class="login-header">
      <div class="login-icon">&#9729;</div>
      <h1 class="login-title"><?= e(APP_NAME) ?></h1>
      <p class="login-subtitle">NIM: <?= e(APP_NIM) ?> &mdash; Masuk ke Panel Admin</p>
    </div>

    <!-- Alert info (dari redirect) -->
    <?php if ($info): ?>
      <div class="alert alert-info"><span class="alert-icon">&#9432;</span> <?= e($info) ?></div>
    <?php endif; ?>

    <!-- Alert error -->
    <?php if ($error): ?>
      <div class="alert alert-error"><span class="alert-icon">&#9888;</span> <?= e($error) ?></div>
    <?php endif; ?>

    <!-- Form Login -->
    <form method="POST" action="/login.php" class="login-form" novalidate>
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          class="form-input"
          placeholder="Masukkan username"
          value="<?= e($_POST['username'] ?? '') ?>"
          autocomplete="username"
          required
          maxlength="50"
        >
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <div class="input-wrapper">
          <input
            type="password"
            id="password"
            name="password"
            class="form-input"
            placeholder="Masukkan password"
            autocomplete="current-password"
            required
          >
          <button type="button" class="toggle-pw" onclick="togglePassword()" title="Tampilkan/Sembunyikan">&#128065;</button>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block">
        &#128274; Masuk
      </button>
    </form>

    <p class="login-hint">Demo: <code>admin</code> / <code>admin123</code></p>
  </div>
</div>

<script>
function togglePassword() {
  const pw = document.getElementById('password');
  pw.type = pw.type === 'password' ? 'text' : 'password';
}
</script>
</body>
</html>
