README
Cara Menjalankan Aplikasi
Clone Repository: Pertama, clone repository ini ke komputer Anda dengan perintah:

bash
Salin kode
git clone [URL_REPOSITORY]
Gantilah [URL_REPOSITORY] dengan URL repository Anda.

Pindah ke Direktori Proyek: Masuk ke folder proyek:

bash
Salin kode
cd multiple-choice-quiz
Install Dependensi: Install semua dependensi yang dibutuhkan dengan menjalankan:

bash
Salin kode
npm install
Jalankan Aplikasi: Setelah semua dependensi terinstall, jalankan aplikasi dengan perintah:

bash
Salin kode
npm start
Buka di Browser: Akses aplikasi melalui browser dengan membuka http://localhost:3000.

Keputusan Desain
Struktur Komponen: Aplikasi ini dibagi menjadi beberapa komponen yaitu Quiz, Question, dan Navbar.

Quiz: Komponen utama yang mengatur alur kuis, termasuk pertanyaan, skor, dan timer.
Question: Menampilkan setiap pertanyaan dan pilihan jawaban. Mengatur logika untuk memilih jawaban dan memberikan umpan balik.
Navbar: Menyediakan informasi waktu dan indeks pertanyaan saat ini.
State Management: Menggunakan useState untuk menyimpan state seperti pertanyaan, skor, dan timer. Ini memungkinkan komponen untuk merender ulang secara efisien saat ada perubahan.

Pengambilan Data: Data pertanyaan diambil dari API eksternal menggunakan fetch. Jika terjadi kesalahan saat mengambil data, aplikasi menampilkan pesan kesalahan yang sesuai.

Timer: Setiap pertanyaan memiliki waktu 30 detik untuk dijawab. Jika timer habis, pertanyaan berikutnya otomatis ditampilkan. Ini menambah tantangan dalam kuis.

Umpan Balik Pengguna: Setelah memilih jawaban, pengguna mendapatkan umpan balik apakah jawabannya benar atau salah. Ini ditampilkan selama 2 detik sebelum melanjutkan ke pertanyaan berikutnya.

Desain Responsif: CSS digunakan untuk memastikan tampilan yang responsif, sehingga aplikasi dapat digunakan dengan baik di berbagai perangkat.
