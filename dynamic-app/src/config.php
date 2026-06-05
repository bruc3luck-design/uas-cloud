<?php
// ============================================================
// src/config.php
// Membaca konfigurasi dari environment variable (Docker-friendly)
// TIDAK ada hardcode credential di sini.
// ============================================================

define('APP_NAME',    'UAS Administrasi Server | Catur Prasetiyo Gama 2388010022');
define('APP_VERSION', '1.0.0');
define('APP_NIM',     '2388010022');

// -- Database (baca dari env, fallback hanya untuk development lokal) --
define('DB_HOST',     getenv('DB_HOST')     ?: '127.0.0.1');
define('DB_PORT',     (int)(getenv('DB_PORT') ?: 3306));
define('DB_NAME',     getenv('DB_NAME')     ?: 'uas_db');
define('DB_USER',     getenv('DB_USER')     ?: 'uas_user');
define('DB_PASSWORD', getenv('DB_PASSWORD') ?: '');

// -- Session --
define('SESSION_LIFETIME', 7200); // 2 jam
define('SESSION_NAME',     'UAS_SESSION');

// -- Timezone --
date_default_timezone_set('Asia/Jakarta');
