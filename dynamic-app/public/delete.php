<?php
// ============================================================
// public/delete.php
// Hapus task (D dari CRUD) — GET dengan konfirmasi JS
// ============================================================

require_once __DIR__ . '/../src/auth.php';
require_once __DIR__ . '/../src/db.php';
require_once __DIR__ . '/../src/helpers.php';

startSecureSession();
requireLogin();

$user = currentUser();
$pdo  = DB::get();

$id = (int)($_GET['id'] ?? 0);

if ($id <= 0) {
    setFlash('error', 'ID task tidak valid.');
    redirect('/dashboard.php');
}

// Pastikan task milik user yang login (prepared statement)
$stmt = $pdo->prepare('SELECT id, title FROM tasks WHERE id = ? AND user_id = ? LIMIT 1');
$stmt->execute([$id, $user['id']]);
$task = $stmt->fetch();

if (!$task) {
    setFlash('error', 'Task tidak ditemukan atau Anda tidak memiliki akses.');
    redirect('/dashboard.php');
}

// Hapus
$del = $pdo->prepare('DELETE FROM tasks WHERE id = ? AND user_id = ?');
$del->execute([$id, $user['id']]);

setFlash('success', 'Task "' . $task['title'] . '" berhasil dihapus.');
redirect('/dashboard.php');
