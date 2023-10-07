// If Else Statements
// ambil elemen untuk ditampilkan pada laman HTML
const ifelseElemen = document.getElementById('ifelse');

let Nama = 'Rafi'
let Hewan = 'Kucing'
if (Nama === 'Rafi') {
    ifelseElemen.innerText = "Halo, Nama Saya " + Nama + " dan saya punya hewan " + Hewan
    console.log("Halo, Nama Saya " + Nama + " dan saya punya hewan " + Hewan);
} else {
    ifelseElemen.innerText = "Nama dan Hewan yang diinput tidak valid"
    console.log("Nama dan Hewan yang diinput tidak valid")
}


// Nested If
// ambil elemen untuk ditampilkan pada laman HTML
const nestedifElemen = document.getElementById('nestedif')

let nilaiUjian = prompt("Masukkan Nilai Ujian : ");

if (nilaiUjian >= 90 && nilaiUjian <= 100) {
    grade = 'A';
    nestedifElemen.innerText = "Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade;
    console.log("Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade);
} else if (nilaiUjian >= 75) {
    grade = 'B';
    nestedifElemen.innerText = "Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade;
    console.log("Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade);
} else if (nilaiUjian >= 55) {
    grade = 'C';
    nestedifElemen.innerText = "Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade;
    console.log("Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade);
} else if (nilaiUjian >= 40 && nilaiUjian <= 0) {
    grade = 'D';
    nestedifElemen.innerText = "Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade;
    console.log("Nilai Ujian kamu " + nilaiUjian + " kamu dapat grade " + grade);
} else {
    nestedifElemen.innerText = "Nilai Ujian yang diinputkan tidak valid";
    console.log("Nilai Ujian yang diinputkan tidak valid");
}

// switch case
// ambil elemen untuk ditampilkan pada laman HTML
const switchElement = document.getElementById("switchcase")

console.log("\t Menu Restoran Infinite Learning \n")
console.log("================================================\n")
console.log("1. Nasi Goreng Infinite \t Rp. 10.000,- \n")
console.log("2. Nasi Soto Ayam Learning \t Rp. 7.000,- \n")
console.log("3. Gado-Gado Web Development \t Rp. 6.000,- \n")
console.log("4. Bubur Ayam Mobile \t Rp. 5.000,- \n")
console.log("================================================\n")
console.log("Masukkan Pilihan Anda: ")

let pilihMakanan = prompt("Masukkan Pilihan Anda (1/2/3/4): ");
// Konversi pilihMakanan dengan parseInt agar hanya pilih angka
pilihMakanan = parseInt(pilihMakanan)

switch (pilihMakanan) {
    case 1:
        console.log("Anda memilih: Nasi Goreng Infinite \t Rp. 10.000,- \n");
        switchElement.innerText = "Anda memilih: Nasi Goreng Infinite \t Rp. 10.000,- \n"
        break;
    case 2:
        console.log("Anda memilih: Nasi Soto Ayam Learning \t Rp. 7.000,- \n");
        switchElement.innerText = "Anda memilih: Nasi Soto Ayam Learning \t Rp. 7.000,- \n"
        break;
    case 3:
        console.log("Anda memilih: Gado-Gado Web Development \t Rp. 6.000,- \n");
        switchElement.innerText = "Anda memilih: Gado-Gado Web Development \t Rp. 6.000,- \n"
        break;
    case 4:
        console.log("Anda memilih: Bubur Ayam Mobile \t Rp. 5.000,- \n");
        switchElement.innerText = "Anda memilih: Bubur Ayam Mobile \t Rp. 5.000,- \n"
        break;
    default:
        console.log("Pilihan yang anda masukkan salah!");
        switchElement.innerText = "Pilihan yang anda masukkan salah!";
}

// For Statement
// ambil elemen untuk ditampilkan pada laman HTML
const forElemen = document.getElementById("for")

let jumlah = 0;
for (let i = 0; i <= 50; i++) {
    jumlah += i
}

console.log("jumlah perulangan kurang dari samadengan 50 adalah " + jumlah)
forElemen.innerText = "jumlah perulangan kurang dari samadengan 50 adalah " + jumlah;

// While
// ambil elemen untuk ditampilkan pada laman HTML
const whileElemen = document.getElementById("while")

let sayur = ["Kangkung", "Bayam", "Wortel", "Timun", "Terong"];
let a = 0;
let teks = "";

while (sayur[a]) {
    teks += sayur[a] + ", ";
    a++;
}

console.log(teks)
whileElemen.innerText = teks

// Do while
// ambil elemen untuk ditampilkan pada laman HTML
const dowhileElemen = document.getElementById("dowhile")

let angka = 0;
let jumlahGenap = 0;

do {
    if (angka % 2 === 0) {
        jumlahGenap += angka;
    }
    angka++;
} while (angka < 50);

console.log("Jumlah angka genap kurang dari 50 adalah: " + jumlahGenap);
dowhileElemen.innerText = "Jumlah angka genap kurang dari 50 adalah: " + jumlahGenap;

// Function
// ambil elemen untuk ditampilkan pada laman HTML
const functionElemen = document.getElementById("function");

let suhu = prompt("Berapa Suhu di Batam Sekarang (dalam Fahrenheit)? : ");

let text = "Temperatur Batam sekarang adalah " + toCelsius(suhu) + " derajat Celsius";

function toCelsius(suhu) {
    return (5 / 9) * (suhu - 32);
}
console.log(text);
functionElemen.innerText = text;