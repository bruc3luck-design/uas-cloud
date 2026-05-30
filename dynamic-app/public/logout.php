<?php
// ============================================================
// public/logout.php
// Destroy session dan redirect ke halaman login
// ============================================================

require_once __DIR__ . '/../src/auth.php';

startSecureSession();
logout();

header('Location: /login.php?msg=loggedout');
exit;
