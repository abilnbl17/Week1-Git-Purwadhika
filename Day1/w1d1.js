/*
>> what it programming ?
adalah program yang kita berikan intruksi 
hardware tidak akan bisa berjalan jika tidak ada software

>> what is programmer language?
yaitu bahasa untuk ngobrol dengan komputer

>> programing level language 
low level, medium level, dan high level language

low level => bahasa sehari-hari
medium level => bahasa inggris sebagai contohnya
high level => bahasa pemrograman 

>> think like a programmer
contoh masalah >> laper pada malam hari
menggunakan jasa teknologi seperti gofood, grabfood, dan lain-lainnya
jadi tanpa harus capek-capek memasak atau pergi keluar

problem >> step 1: you try a solution >> step 2: try another solution >>
step 3: if that does not work, repeat step 2 >>
if it is done, will be solved

>> why learn programming ?
# improve problem  solcing & logical thinking
meningkatkan logika pada programming walau pun sulit tetapi bagus untuk
upgrage logika
# grow your activity
# level up your career
# great earning potential
# technology are rulling the world

>> introduction to algorithm
tanpa kita sadari aloritma itu ada dimana-mana 

>> why are alorithms important to understand ?
untuk mengerti sebuah algoritma tidak harus programer doang, karna memiliki 
algorithm thinking. 
algoritma yang dipilih adalah algoritma yang terbaik.

>> where are algorithm used as a web development ?
bagaimana cara kita memebuat web pemerograman yang baik dan benar ?
dengan cara memhami sebuah logika yang baik dan benar dan mempermudah para penggunanya

>> introduction to javascript ?
js program yang ringan atau enteng dan lebih mudah kita menggunakannya 
biasanya digunakan untuk web pages
dan kita untuk pemula blm membuat web pages dan mesin pada js ini yaitu V8 js engine

>> what is javascript ?
js is single-threaded, non-blocking, asynchronous, concurrent language

*/

// first code

console.log ("Hello world");
 // console.log sebuah perintah dari js print out apa yang kita tulis
 // single statement bisa di tandai dengan semicolon

 // variable => adalah sebuah data
 // perumpamaan sebuah box yang bisa di ganti-ganti


// code example

let message; // declaration
message = "Hello World 1"; // assign

console.log (message); // memanggil variable message dan print out

/*
var   >> ketika pada bahasa C isian pada variable bisa berubah ketika ada var yg lain
    >> 
let   >> penggunakan let lebih optimal karna tidak berubah ketika ada let yang lainnya
    >>
const >> penggunaan conts tidak bisa dirubah sama sekali atau bisa disebut constant
    >>


*/

// variable naming
let say = "hello";
let say2 = "hello 2";
let say_= "hello 3";
let say$ = "hello 4";

// diatas ini adalah simbol yang bisa di atas ini dan bisa digunakan didepan atau diluar
// hanya angka tidak bisa digunakan pada variable
// penggunaan huruf besar atau kecil itu termasuk berbeda
// ---------------------------------------------------- 

// Data type / tipe data
// primitive akan sering digunakan
// STRING
// "" double
// '' single
// `` backtick
let string = "double";
let string2 = 'single';
let string3 = `backtick`;

// Number & Bigint
let angka = 123;
let angka2 = 456;
let angka3 = 123n;

// boolean
let kenyang = true;
let lapar = false;

// null
let Null = null; // biasa digunakan sebagai sebuah variable yang akan memiliki isi tapi tidak untuk saat ini
// console.log (null);
// null itu menandakan value itu sebuah absen

// undefined atau tidak terdefinisi
let undefined;
console.log (undefined);
// --------------------------------------------------------

// non primitive
// object >> mendeskripsikan sebuah hal
const mobil = { // contoh lebih mengeluarkan ciri-ciri
    warna : "merah",
    merk : "toyota",
};

// array >> bisa menyimpan lebih dari satu elemen
const merksepatu = ["addidas", "converse", "nike"];
// -------------------------------------------------------

// mutable vs immutable
// mutable >> isinya bisa dirubah 
// immutable >>  isinya tidak bisa dirubah

const mouse = "mouse hitam"; // immutable tidak bisa dirubah
// mouse = "mouse merah"; >> tidak bisa dirubah

const arr = [1,2,3,4]; // kumpulan angka
arr.push(5); // menambahkan sebuah isi value pada variable
console.log (arr);

let name = "jhonny"; // stack pertama bersifat independen
let newName = name; // stack kedua mengambil dari value stack pertama
newName = "jhon";

let person = {
    name : "jhonny",
    age : 26,
};

let newPerson = person; // bersifat pointer
newPerson.name = "udin";

// deep copy = mengambil value dari variable mutable dan dijadikan sebagai pointer
// shalow copy = mengambil value dari varibale mutable dan tidak dijadikan pointer

let deepCopy = person;
let shallowCopy = { ...person }; //spread

console.log (name, newName);
console.log (person, newPerson);

deepCopy.name = "Ujang";

console.log (person, deepCopy, shallowCopy);
// ---------------------------------------------------------
let String2 = "hello purwadhika";
console.log (String2, string.length, "digits");
console.log (String2.slice(6, 11)); // dari 0 sampai dengan 2
console.log (String2.replace("hello", "malam,")) // menggantikan value kata pada variable
console.log (String2.toUpperCase());
console.log (String2.charAt(10));
console.log (String2.indexOf("p"));

//operator + - * /
let String3 = String2 + " online!";
console.log (String3 + " online online online");// literal
console.log (`ini String ${String3}.`);

// index
// char >> 1 digit string
// string >> kumpulan char
// setiap char di dalam string memiliki posisi yang disebut sebagai index
// index dimulai dari 0

// object memiliki property dan method
// prop dan method adalah sebuah key
// method adalah sebuah fungsi dalam object
// property adalah variable dalam object
// ---------------------------------------------------------

// Number built in method
let number = 10;
console.log (number.toString());

console.log (10 + "10"); // number+String >> String
console.log (10 + "abc"); // Nun >> not a number

console.log (Boolean(1)); //true
console.log (Boolean(0)); //false
console.log (Boolean(-1)); //true
// number selain 0 dianggap true

console.log (Boolean("hello")); //true
console.log (Boolean("")); //false
console.log (Boolean(" ")); //true
// ---------------------------------------------------------

// tipe data date
let date = new Date(0);
date = new Date("2017-01-26");
console.log (date);

//operator
console.log(10 + 10); // 10 tambah 10 = 20
console.log(10 - 10); // 10 kurang 10 = 0
console.log(10 * 10); // 10 kali 10 = 100 
console.log(10 / 5); // 10 bagi 5 = 2
console.log(10 % 10); // 10 modulus 10 = 1
console.log(10 ** 2); // 10 pangkat 2= 100

let number2 = 5;
number2 = number2 + 2; // hasilnya 7
console.log (number2);

number2 * 1000;
console.log (number2);
number2 += 30; // sama saaj dengan number2 = number2 + 30
console.log (number2);
number2++;
console.log (number2);
number2--;
console.log (number2);
number2 += 2; // increment by 2
number2 -= 3; // increment by 3

// postfix & prefix
let pre = 0;
console.log (++pre, "ini adalah prefix");// nilai yg sudah di jumlahkan 1

let post = 0;
console.log (post++, "ini adalah postfix");

// comparison operatiors
console.log (2 == 3); // false
console.log (2 == 2); // true
console.log (2 === "2") // false (tipe data berbeda)
// == >> komparasi antar value
// === >> komparasi antar value dan tipe data

console.log (2 != 3); // true
console.log (2 != 2); // false
console.log (2 !== "2"); // true
console.log ( 2 > 1); // true
console.log (2 < 3); // true
console.log (2 >= 2); // true
console.log (1 <= 3); // true
// ----------------------------------------------------------


// introduction to psuedocode
// sebuah basic kita menggunakan bahasa manusia untuk menciptakan codingan kita
// inti dari pribadi adalah jalurnya pada membuat sebuah code 

// cari luas persegi panjang
// hint, luas = panjang * lebar

// pseudocode
/*
    akan ada 2 variable panjang dan lebar
    untuk mencari luas maka panjang dikali dengan lebar
    tampilkan hasil luas didalam terminal
*/

let panjang = 5;
let lebar = 3;

let luas = panjang * lebar;

console.log (`luas dari panjang ${panjang} dan lebar ${lebar} adalah ${luas}`);

//penting
/*
    pelajari tipe data
    pelajari built in method dan prop didalam variable tipe data tertentu
    pelajari pseudocode
*/