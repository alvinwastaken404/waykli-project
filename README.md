# waykli-project: Proyek E-Learning Berbasis Express Native
Platform edukasi interaktif berbasis web untuk melestarikan dan mempelajari sejarah, karakter, serta kisah epik pewayangan Nusantara. Sistem ini dirancang untuk memberikan pengalaman belajar yang terstruktur, menarik, dan mudah diakses.

## ✨ Fitur Utama

Sistem ini dilengkapi dengan beberapa modul utama untuk mendukung proses pembelajaran:

* 📊 **Dashboard**: Halaman utama yang menyajikan ringkasan progres belajar, statistik ujian, dan rekomendasi materi wayang terbaru.
* 📚 **Menu Perpustakaan**: Pusat literasi digital yang berisi koleksi materi komprehensif mengenai tokoh, jenis-jenis wayang, dan filosofi pewayangan.
* 📝 **Menu Ujian**: Modul evaluasi interaktif berupa kuis dan ujian untuk mengukur pemahaman pengguna dengan sistem penilaian otomatis.
* 👤 **Menu Profil**: Halaman manajemen pengguna untuk mengatur data diri, melacak pencapaian, dan melihat histori nilai ujian.

## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi modern untuk memastikan performa yang cepat, antarmuka yang responsif, serta keamanan data yang baik:

* **Backend**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
* **Keamanan & Enkripsi**: [bcrypt](https://www.npmjs.com/package/bcrypt) (digunakan untuk melakukan *hashing* dan enkripsi password pengguna yang tersimpan di database).
* **Frontend / Styling**: CSS Native
* **Template Engine**: EJS (atau sesuaikan dengan kebutuhan)
* **Database**: MongoDB / MySQL (Dapat dikonfigurasi pada `.env`)

## 👥 Tim Pengembang & Jobdesk

Proyek ini dikembangkan oleh kelompok kami dengan pembagian tugas sebagai berikut:

| Nama | NIM | Jobdesk |
| :--- | :--- | :--- |
| **Muhammad Alvin Al Fatah** | `202451143` | **Lead Backend Developer** (Membangun arsitektur & logika seluruh sistem) & **Frontend Developer** (Menu Perpustakaan) |
| **Akhmad Turaikhan** | `202451131` | **Frontend Developer** (Halaman Login & Autentikasi) |
| **Refa Anindita Putri Oktafiana** | `202451126` | **Frontend Developer** (Menu Profil) |
| **Tri Widya Lestari** | `202451129` | **Frontend Developer** (Menu Ujian) |

## 🚀 Panduan Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda:

1. **Clone repositori ini**
   ```bash
   git clone [https://github.com/username/elearning-wayang.git](https://github.com/username/elearning-wayang.git)
   cd elearning-wayang
