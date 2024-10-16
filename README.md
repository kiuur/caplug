<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification Connection Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #121212;
            color: #e0e0e0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1e1e1e;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            box-shadow: 0 0 10px rgba(255,255,255,0.1);
            flex-grow: 1;
        }
        h1 {
            color: #ffffff;
            text-align: center;
            white-space: nowrap;
        }
        .subtitle {
            font-size: 0.9em;
            color: #b0b0b0;
            text-align: center;
            margin-bottom: 20px;
        }
        .notification {
            background-color: #2a2a2a;
            border-radius: 4px;
            padding: 15px;
            margin-bottom: 15px;
        }
        .notification-title {
            font-weight: bold;
            margin-bottom: 5px;
            color: #ffffff;
        }
        .notification-message {
            color: #d0d0d0;
        }
        .notification-time {
            font-size: 0.8em;
            color: #909090;
            text-align: right;
            margin-top: 5px;
        }
        .thumbnail-container {
            position: relative;
            width: 100%;
            max-width: 300px;
            margin: 20px auto;
        }
        .thumbnail-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: inherit;
            filter: blur(10px);
            z-index: -1;
        }
        .thumbnail {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 4px;
            position: relative;
            z-index: 1;
        }
        .footer {
            text-align: center;
            padding: 40px 20px;
            color: white;
        }
        .footer-content {
            position: relative;
            z-index: 1;
        }
        .footer a {
            color: white;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
        }
        .social-icons a {
            color: white;
            font-size: 24px;
            transition: transform 0.3s ease;
        }
        .social-icons a:hover {
            transform: scale(1.2);
        }
        .footer-text {
            margin-top: 20px;
            font-size: 0.8em;
            opacity: 0.7;
        }
    </style>
    <script src="https://kit.fontawesome.com/your-fontawesome-kit.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <h1>Laporan Koneksi Notifikasi</h1>
        <p class="subtitle">Manfaatkan sistem notifikasi ini untuk tetap terinformasi tentang status koneksi dan aktivitas penting pada Script Anda. Notifikasi membantu Anda mengambil tindakan cepat dan efisien.</p>
        
        <div class="notification">
            <div class="notification-title">Connected Successfully</div>
            <div class="notification-message">Here are the specifications :</div>
            <div class="notification-message">Dengan User Id : ${KyuuRzy.user.id}</div>
            <div class="notification-message">Nama Id : ${KyuuRzy.user.name}</div>
            <div class="notification-time">${wita}</div>
        </div>

        <div class="thumbnail-container">
            <img src="https://files.catbox.moe/he0m16.jpg" alt="Thumbnail" class="thumbnail">
        </div>
    </div>
    
    <footer class="footer">
        <div class="footer-content">
            <a href="https://t.me/KyuuDev" target="_blank">N-Kiuur ZcoderX</a>
            <div class="social-icons">
                <a href="https://github.com/kiuur" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.youtube.com/ytkyuutense" target="_blank"><i class="fab fa-youtube"></i></a>
                <a href="https://t.me/KyuuDev" target="_blank"><i class="fab fa-telegram"></i></a>
                <a href="https://wa.me/628888888" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>
            <p class="footer-text">
                Tetap terhubung dengan kami untuk mendapatkan informasi terbaru tentang produk dan layanan kami. 
                Kami berkomitmen untuk memberikan pengalaman terbaik bagi pengguna kami.
            </p>
            <p class="footer-text">
                © 2024 N-Kiuur ZcoderX. Hak Cipta Dilindungi.
            </p>
        </div>
    </footer>
    <script>
    </script>
</body>
</html>
