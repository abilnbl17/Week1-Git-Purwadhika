// Conditional dan Loop Statement
/*
    conditional statement ketika memberi sebuah codingan yang ada kondisi
    yang memberi sebuah boolean, hanya menampilkan true or false jika tidak
    terpenuhi akan terus berproses, dan jika terpenuhi codingan selesai

*/
// example if statement dan else statement
let age = 22;
if (age >= 17){
    console.log ("kamu bisa mendapatkan KTP");
} else {
    console.log ("kamu tidak bisa mendapatkan KTP");
};
console.log ("----------------------------------------------");

// example else if statement
let grade = "A";

if (grade === "A"){
    console.log ("Bagus Sekali");
} else if ( grade === "B"){
    console.log ("Bagus Aja");
} else if ( grade === "C"){
    console.log ("Cukup Baik");
} else {
    console.log ("Belajar Lagi!");
};
console.log ("----------------------------------------------");

// logical operator
// && "Dan"
let kota = "Tangsel";
let provinsi = "Jawa";

if (provinsi === "Banten" && kota === "Tangsel"){
    console.log ("Welcome to BSD City");
} else if (provinsi === "Jawa Barat" && kota === "Tangsel"){
    console.log ("Welcome to Pasar Lama Tanggerang");
} else {
    console.log ("Salah Input");
}
console.log ("----------------------------------------------");

// || "or" ketika salah satu ada yang benar otomatis tetap memilih dalam kondisi itu
let makan = "Roti";
let minum = "Kopi";

if (makan === "Pizza" || minum === "Soda"){
    console.log ("Pesan Paket A");
} else if (makan === "Rames" || minum === "Esteh"){
    console.log ("Pesan Paket B");
} else {
    console.log ("Tidak jadi membeli");
}
console.log ("----------------------------------------------");
// ! "Bukan" 

let kendaraan = "mobil";

if (!(kendaraan === "motor")){ // true ketika valuenya sama dengan variable diatas maka akan menghasilkan false
    console.log ("Menggunakan motor"); // dan ketika false ouput tidak akan menampilkan hasilnya
}
console.log ("----------------------------------------------");

// nested if "if yang bersarang" bisa ditumpuk
// let gender = "man";
// let ages = 5
// if (gender === "man"){
//     if (age <= 10){
//         console.log ("Anak-anak");
//     } else if (ages > 10 || ages <= 17){
//         console.log ("pria dewasa");
//     }
// } else if (gender === "woman"){
//     if (age <= 10){
//         console.log ("Anak-anak");
//     } else if (ages > 10 || ages <= 17){
//         console.log ("wanita dewasa");
//     }
// }
// -------- masih error --------------
console.log ("----------------------------------------------");
// switch case conditional statement
const fruit = "semangka";

switch (fruit){
    case "pepaya":
        console.log ("ini buah pepaya");
    break;
    case "manggos":
        console.log ("ini buah mangga");
    break;
    case "orange":
        console.log ("ini buah jeruk");
    break;
default:
    console.log ("ini bukan buah");
}
console.log ("----------------------------------------------");

// truty and falsy
if (1){
    console.log ("ini adalah true");
}
if (0){ // tidak akan muncul karna falsy
    console.log ("ini adalah 0");
}
if ("hello"){
    console.log ("ini adalah hello");
}
if (""){ // tidak akan muncul karna falsy
    console.log ("ini adalah tidak muncul");
}
console.log ("----------------------------------------------");

// ternary operator if else dalam single statement
// let genders = "female";
// if (genders = "female"){
//     console.log ("namanya joko");    
// } else {
//     console.log ("namanya nuna");
// }
// console.log ("-------------------Masih Error-------------------")
console.log ("----------------------------------------------");


// loop statement
/*
    sebuah siklus yang berulang sampai sebuah kondisi terpenuh
    dan berhenti
*/

// for loop
    /*
        3 statement dalam perulangannya

        >>yang dijalankan pertama kali looping ini di baca
        dengan value 0

        >>second statement kapan kita akan menjalankan loopingan
        ketika blm berhenti akan selalu berjalan

        >>third statement akan berhenti ketika loopingan sudah sesuai kondisi
    */

for (let i = 0; i < 3; i++) {
    console.log ("hello"); // nilai i yang pertama dijalankan adalah 0 
    // statement 1 >> let i = 0 dipanggil pertama kali for dijalankan
    // statement 2 >> i < 3 adalah kondisi yang menentukan apakah task harus dijalankan atau tidak
    // statement 3 >> i++ akan dijalankan setiap seluruh task berhasil dijalan
}


// while loop
/*

*/
let number = 0;
while (number < 3){
    console.log ("hello2");
    number++; // +1
}



// do while ... loop
/*

*/
let numbers = 0 // falsy
do {
    console.log ("ini jalan sebelum ada kondisi");
} while (numbers);

// continue
for (let i = 0; i < 5; i++) {
    if (i == 2) continue; // skip apabila i == 2
    console.log ("ini angka", i);
    /*
        setiap anghka di jalankan dari 0 sampai 5
    */
}

console.log ("----------------------------------------------");

// psedocode looping statement

const numberOfFactorial = 0;
let result = 1;
// 1*2*3*4*5*6

for (let i = 1; i <= 6; i++){
    if (i == 1 || i == 3 || i == 5) continue;
    console.log ("ini angka", i);
} // coba sendiri
console.log ("----------------------------------------------");

let result1 = 1;
let number2 = 6;

for (let j = 1; j <= 6; j++){
    result1 *= j;
}
console.log (`Faktorial ${number2} adalah ${result1}`);
