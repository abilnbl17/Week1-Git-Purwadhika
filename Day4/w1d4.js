// // array and function

// /*
//     array itu apa ?
//     contohnya array itu seperti lemari

// */

// let arr = ["A", "B", "C", "D", "E"];
// let arr2 = new Array("A", "B", "C", "D", "E");

// console.log (arr);
// console.log (arr2);
// // number
// // string
// // array
// // object
// // date

// const arrNumber = [1, 2, 3, 4, 5]; // array of number
// const numbers = [1, 2, 3, 4, 5]; // array of number
// const books = ["buku ipa", "buku ips", "naruto", "komik one piece"];

// console.log (books);

// const student = {
//     name: "udin",
//     email: "udin@gmail.com",
//     age: 17,
// };

// const student2 = {
//     name: "ujang",
//     email: "ujang@gmail.com",
//     age: 18,
// };

// const students = [student,student2];
// console.log (students); // contoh gabungan antara student1 dan student 2

// // built in method array
// // push
// console.log (numbers); // sebelum ada angka 6
// numbers.push (6); // tambahkan 6 didalam array numbers
// // push merupakan method untuk menambahkan value pada array di posisi index terakhir
// console.log (numbers); // sesudah ada angka 6 


// console.log (numbers.toString().replace(/,/g, "")); // di replace setiap koma pada angka array 

// // numbers.push("7"); // string (tidak disarankan menambahkan tipe data string kedalam tipe data yang lain)

// console.log (numbers.join("-"));
// // join merubah array menjadi string dan mengganti setiap, menjadi value yang berada di parameter join

// numbers.pop(); // menghapus last index dari array
// console.log (numbers);

// numbers.shift(); // menghapus index pertama dari sebuah array
// console.log (numbers);

// numbers.unshift(5); // menambahkan value ke index pertama dari sebuah array
// console.log (numbers);

// numbers.splice(0, 2, 8); // menghapus index didalam array, dengan ketentuan
// // parameter pertama menjadi lokasi index
// // parameter kedua menjadi total index yang akan dihapus start dari parameter pertama
// // menggunakan (0, numbers.lenght) untuk menghapus semua array pada kurung kotak tersebut
// // parameter ketiga adalah ditambahkan kedalam array dan diletakan berdaarkan index parameter 1
// console.log (numbers); 

// console.log(numbers.length); // memunculkan total data yang ada didalam array
// console.log ("----------------------------------")
// const numbers2 = [11, 12, 13];
// // console.log (numbers.concat(numbers2)); 
// const gabunganNumbers = numbers.concat(numbers2); // menggabungkan 2 buah array dan disimpan kedalam variable
// console.log (gabunganNumbers);
// const gabunganNumbers2 = [...numbers, ...numbers2];// spread array numbers dan numbers2, memasukan value

// console.log (gabunganNumbers2);
// gabunganNumbers.push(4);
// console.log (gabunganNumbers);
// console.log ("angka 4 berolkasi di index ke", gabunganNumbers.indexOf(4)); // method untuk mencari index didalam array 

// //contoh
// const fruit = ["Apel", "Mangga", "Durian", "Rambutan", "Anggur"];
// console.log (fruit.sort());// mengurutkan berdasarkan alpabet
// console.log (gabunganNumbers.sort((a, b) => a - b)); // mengurutkan array of number (khusus array of number)
// // gabungan sort di atsa bisa dibalikan atau di reverse dengan dibalikkan ((a, b) => b - a)
// console.log (fruit.reverse()); // membalikan secara urutan

// console.log (gabunganNumbers.sort((a, b) => b - a));
// for (let number of gabunganNumbers) console.log (number);

// for (let i = 0; i < gabunganNumbers.length; i++){
//     console.log (gabunganNumbers[i], "ini for biasa");
    
// }
// gabunganNumbers.map((value, index) =>{
//     console.log (value, "ini looping dari map", index);
// });
// // butuh parameter
// // parameter didalam map merupakan sebuah callback function
// // () => {} || () =>
// // callback function juga memiliki parameter

console.log ("---------------Array dan method---------------------")
console.log ("---------------Array dan method---------------------")

// function
// yang bisa dipanggil dari codingan yang lain

// declaration function

function square(number){
    // task dari function square
    return number * number;
}

// square merupakan nama function
// number merupakan parameter
// parameter adalah sebuah variable yang exist didalam sebuah function
// passing value kedalam function lewat parameter
// return merupakan hasil dari function
// square(5); // menghasulkan angka perkalian 5 x 5;
console.log (square(5)); // dengan return

function pengurangan(angka1, angka2){
    // print (angka1-angka2); // error 

}
let angka1 = 8,
angka2 = 5;
pengurangan (angka2, angka1);
// variable didalam argument tidak menentukan urutan parameter
// tetapi parameter menentukan urutan didalm argument

// const perkalian = function (angka1, angka2){
//     print(angka1 * angka2); // error
// };

// const pembagian = (angka1, angka2) => {
//     // task
//     print(angka1 / angka2); // error
// };
console.log ("----------error-------------------")

const penjumlahan3 = (angka1, angka2, angka3) => angka1 + angka2 + angka3; // return angka1+angka2+angka3
const penjumlahan3_2 = (angka1, angka2, angka3) => {
    angka1 + angka2 + angka3;
};

console.log ("arrow", penjumlahan3(1, 2, 3));
console.log ("arrow", penjumlahan3_2(1, 2, 3));

// pembagian adalahnama function
// angka1, angka2 adalah parameter

const greetings = () => {
    const hello = "Hello";
    return hello;
};

console.log (greetings());

// memory stack
// greetings
// greetings dipanggil
// hello
// greetings selesai dipanggil

// default parameter
let a; // undefined

const say = (name, greet = "hello, ") => {
    console.log (greet + name);
};

say("David")
say(" David", "selamat malam,");

// rest parameter
const restFunction = (param1, param2, ...restParam) => {
    console.log (param1, "param1");
    console.log (param2, "param2");
    console.log (restParam, "restParam");
};

restFunction(1, 2, 3, 4, 5, 6, 7);

// nested function

// function menciptakan function di dalamnya
const getmsg = (name) => {
    const say = () => "hello, " + name;
    const welcomeMsg = () => " welcome to Purwadhika ";
    return say() + welcomeMsg(); // hello, aryo welcome to purwadhika
};
console.log (getmsg("Aryo"));

// closure
const greetingsClosure = (name) => {
    const hello = "Hello ";

    return () => hello + name;
};

// arrow fucntion bersifat single statement
// dimana arrow function tidak perlu repot- repot tulis return

const greetDavid = greetingsClosure ("David");
// greetDavid = () => "Hello" + "David" // greetDavid sama dengan ini dan untuk tipedata greetdavid sama dengan function

console.log (greetDavid());

// currying
const multiplier = (factor, number) => number * factor;
console.log (multiplier(5, 3));

const multiplier2 = (factor) => (number) => factor * number;
console.log (multiplier2(5)(3));

// recirsive
const countDown = (frontNumber) => {
    console.log (frontNumber); // 5 berubah jadi 4 berubah jadi 2 berubah jadi 1

    let nextNumber = frontNumber - 1; // 4 jadi 3 jadi 2 jadi 0

    if (nextNumber > 0) return countDown (nextNumber);
}
countDown(5);


// -----------------------------
console.log("--------------batas--------------");
const number3 = [1,2,3,4,5];
number3.map((values) => {
    console.log (values, "map");
});
// sebuah methid yang return sebuah array based in return dari callback

const filteredNumber = number3.filter((values) => {
    if (values % 2 === 0) return values;
}
); // sebuah method yang return yang array sesuai dengan kondiis returnnya
console.log (filteredNumber, "hasil filter");

const found = number3.find((values) => {
    if (values % 2 === 0) return values;
}
);
console.log (found, "ini found");

let sum = 0;
number3.forEach ((values) => {
    sum += values;
}
);
console.log (sum);

let sum2 = number3.reduce((sum, value) => sum + value, 0);

// sum = 0
// sum + value

console.log (sum2);
// 1 parameter callback
// 2 parameter intial values
