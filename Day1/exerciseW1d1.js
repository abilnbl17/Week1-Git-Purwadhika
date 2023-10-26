// Write a code to find area of rectangle
/*
    Pseudocode
    >> input
        Panjang = 5
        Lebar = 3

    >> process
        Panjang dikalikan dengan lebar

    >> output
        Luas dari perkalian panjang dengan lebar 
        Luas persegi panjang = 15
*/

let length = 5;
let width = 3;

let luasPersegiPanjang = (length * width);
console.log ("Hasil dari luas persegi panjang adalah " + luasPersegiPanjang);
console.log ("------------------------------------------No 1");

// Write a code to find perimeter of rectangle
/*
    Pseudocode
    >> input
        panjang = 5
        Lebar = 3

    >> Process
        2 dikalikan Panjang persegi panjang
        2 dikalikan lebar persegi panjang
        ---------------atau-------------------
        2 dikalikan ( panjang tambah lebar) 

    >> output
        keliling dari 2 dikalikan panjang persegi dan 2 dikalikan dengan lebar persegi
        keliling persegi panjang = 16
*/
let panjangPersegi2 = 5;
let lebarPersegi2 = 3;

let kelilingPersegiPanjang = (2 * panjangPersegi2 + 2 * lebarPersegi2);
console.log (`Hasil dari keliling persegi panjang adalah ` + kelilingPersegiPanjang);
console.log ("------------------------------------------No 2");

// write a code to find diameter, circumference and area of circle
/*
    Pseudocode
    >> input
       r = 5

    >> process
        => Diameter
            D = 2 dikalikan 5 = 10
            
        => Keliling
            2 dikalikan 3.14 dan dikalikan 5 = 31.4
    
        => luas lingkaran
            1/4 dikalikan dengan 3.14 dikalikan dengan diameter 10 = 78.5

    >> output
        => Diameter
            Diameter Lingkaran adalah 10

        => Keliling
            Keliling lingkaran adalah 31.4

        => luas lingkaran
            luas lingkaran adalah 78.5
*/

// Diameter lingkaran
let r = 5;

let D = (2 * r);
console.log (`Diameter Lingkaran adalah `+D);

// Keliling lingkaran
let r2 = 5;

let kll =  (2 * 3.14 * r2);
console.log (`Keliling Lingkaran adalah `+ kll);

// Luas lingkaran
let Diameter = 10;

let luasLingkaran = (0.25 * 3.14 * Diameter);
console.log (`Luas Lingkaran adalah ` + luasLingkaran);
console.log ("------------------------------------------No 3");

// Write a code to get find angles of triangle if two angles are given
/*
    Pseudocode
    >> Input
        anglesA = 80
        anglesB = 65
        Sudut = 180 (Derajat)

    >> process
        AnglesC = Sudut - (anglesA + anglesB)
        180 - (80 + 65)

    >> output
        AnglesC = 35

*/

let anglesA = 80;
let anglesB = 65;

let anglesC = 180 - (anglesA + anglesB);
console.log (`Sisi angles segitiga adalah ` + anglesC);
console.log ("------------------------------------------No 4");

// Write a code to get difference between dates in days
/*
    Pseudococde
    >> input
        date1 = 2022-01-20
        date2 = 2022 -01-22

    >> process
        dibuatkan date1 dan date2 sesudah varible date dengan 
        value date1 = 2022-01-20 dan date2 = 2022-01-22 
    >> output
        date1 = 2022-01-20 dan date2 = 2022-01-22 
        dengan selisih 2 hari
*/

let date1 = new Date(0);
date1 =  new Date("2022-01-20");
date2 = new Date("2022-01-22");

let selisihHari = date2 - date1;
let perbedaanHari = selisihHari / (24 * 1000 * 3600);
/*
    Keterangan pribadi
    >> 1000 milidetik satuan waktu kecil dengan kata lain 1 detik
    >> 3600 detik satuan waktu perhitungan 1 jam
    >> 24 jam satuan perhitungan 1 hari
*/

console.log (`Perbedaan Hari pada tanggal diatas adalah ` + perbedaanHari + ` Hari`);
console.log ("------------------------------------------No 5");

//Write a code to convert days to year, months and days 
// (notes 1year: 365days, 1month)
/*
    Example: 400 days >> 1 year, 1 month, 5 days
    Example: 366 days >> 1 year, 0 month, 1 day

    Pseudocode
    >> input
        days1 = 400
        days2 = 366
        dayInYear = 365 
        dayInMonth = 30

    >> process
        >> tahun perharinya = untuk mencari year1 cara perhitungannya dari days1 dibagi dengan perharinya tahun
        lalu dilanjutkan dengan perhitungan hari pertahunnya dengan cara perhitungannya
        days1 dimodulud dengan hari pertahunnya, sesudah itu lanjut ke bulan
        >> bulan perharinya = untuk mencari month1 cara perhitungannya dari daysafteryears di bagi dengan
        day in month lalu mencari perhari dalam perbulannya dengan cara perhitungannya day after year di modulus day in mont
        >> sisa hari yang dicari = untuk mencari sisa hari yang dibutuhkan variable dayaftermont modulus dengan days pada inputan diatas
        akan keluar hasil yang akan di cari
    >> output
        1. 400 days >> 1 year, 1 month, 5 days
        2. 366 days >> 1 year, 0 month, 1 day
*/

let days1 = 400;
let days2 = 366;

let dayInYear = 365;
let dayInMonth = 30;


let year1 = Math.floor (days1 / dayInYear);
let year2 = Math.floor (days2 / dayInYear);
let dayAfterYear = days1 % dayInYear;
let dayAfterYear2 = days2 % dayInYear;

let month1 = Math.floor (dayAfterYear / dayInMonth);
let month2 = Math.floor (dayAfterYear2 / dayInMonth);
let dayAftrerMonth = Math.round (dayAfterYear % dayInMonth);
let dayAftrerMonth2 = Math.round (dayAfterYear2 % dayInMonth);

let day1 = Math.floor (dayAftrerMonth % days1);
let day2 = Math.floor (dayAftrerMonth2 % days2);



console.log (`400 days >> ${year1} year, ${month1} month, ${day1} days`);
console.log (`366 days >> ${year2} year, ${month2} month, ${day2} days`);
console.log ("------------------------------------------No 6");
console.log ("----------------------Done--------------------");