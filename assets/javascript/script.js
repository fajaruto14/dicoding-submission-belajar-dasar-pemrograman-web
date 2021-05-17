// Masukkan nama anda pada prompt, maka anda akan disambut dengan baik
let name = prompt("Halo, siapa namamu?");
alert("Selamat datang " + name + ". Selamat menikmati konten yang kami sajikan di website ini... Terima kasih :)");

// Mengubah warna layout tentang menjadi warna magenta saat di klik
const tentang = document.querySelector('#tentang');
function ubahWarnaTentang() {
	tentang.style.backgroundColor = 'magenta';
}
tentang.onclick = ubahWarnaTentang;

// Mengubah warna layout teman menjadi warna lightskyblue saat di klik
const teman = document.querySelector('#teman');
function ubahWarnaTeman() {
	teman.style.backgroundColor = 'orange';
}
teman.onclick = ubahWarnaTeman;

// Mengubah warna layout musuh menjadi warna lightgreen saat di klik
const musuh = document.querySelector('#musuh');
function ubahWarnaMusuh() {
	musuh.style.backgroundColor = 'limegreen';
}
musuh.onclick = ubahWarnaMusuh;

// Mengubah warna layout profil menjadi warna gold saat di klik
const profil = document.querySelector('#profil');
function ubahWarnaProfil() {
	profil.style.backgroundColor = 'lightskyblue';
}
profil.onclick = ubahWarnaProfil;
