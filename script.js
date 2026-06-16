// Memastikan library Lucide Icons ter-render dengan benar
document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();
});

// Selector Elemen Avatar
const avatarInput = document.getElementById('avatarInput');
const avatarImage = document.getElementById('avatarImage');
const btnCamera = document.getElementById('btnCamera');

// Trigger klik input file saat tombol kamera ditekan
btnCamera.addEventListener('click', function () {
    avatarInput.click();
});

// Logika Pratinjau (Preview) Foto Profil setelah dipilih
avatarInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// Selector Elemen Form Profil
const profileForm = document.getElementById('profileForm');
const btnBatal = document.getElementById('btnBatal');

// Logika Submit Form (Simpan Perubahan Data)
profileForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah muat ulang halaman web

    // Ambil semua value input terbaru
    const namaBaru = document.getElementById('inputNama').value;
    const emailBaru = document.getElementById('inputEmail').value;
    const usernameBaru = document.getElementById('inputUsernameReal').value;
    const passSaatIni = document.getElementById('currentPassword').value;
    const passBaru = document.getElementById('newPassword').value;

    // Validasi dasar jika user ingin mengganti password
    if (passBaru && !passSaatIni) {
        alert("Harap masukkan password saat ini untuk melakukan perubahan password baru!");
        return;
    }

    // Perbarui teks UI pada kartu profil kiri secara realtime
    document.getElementById('displayNama').innerText = namaBaru;
    document.getElementById('displayUsername').innerText = '@' + usernameBaru.replace('@', '');
    document.getElementById('displayEmail').innerText = emailBaru;
    document.getElementById('inputUsernameCard').value = namaBaru;

    alert("Perubahan profil Anda berhasil disimpan!");

    // Kosongkan kembali kolom input password demi keamanan
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
});

// Logika Tombol Batal
btnBatal.addEventListener('click', function () {
    if (confirm("Apakah Anda yakin ingin membatalkan semua perubahan data?")) {
        profileForm.reset();
    }
});