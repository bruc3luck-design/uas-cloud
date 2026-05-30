<?php
// ============================================================
// public/index.php
// Entry point — redirect ke dashboard jika login, atau ke login
// ============================================================

require_once __DIR__ . '/../src/auth.php';

if (isLoggedIn()) {
    header('Location: /dashboard.php');
} else {
    header('Location: /login.php');
}
exit;
