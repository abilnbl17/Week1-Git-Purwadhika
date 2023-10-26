// Write a code to convert celsius to fahrenheit
/*
    Pseudocode
    >> Example:
    60 celcius => 140 fahrenheit

    >> input 
    let celcius = 60;
    let fahrenheit = 140 

    >> Process
    pada proses ini melakukan sebuah perulangan for loop untuk bisa mengubah 
    dari celcius ke fahrenheit
    *rumus (celcius * 9/5) + 32

    >> output
    60 celcius => 140 fahrenheit
*/

let celsiusExample = 60

for (let celsius = celsiusExample; celsius <= 140; celsius += 100){
    let fahrenheit = (celsius * 9/5) + 32;
    console.log (`${celsius} Celsius to ${fahrenheit} Fahrenheit`);
}
console.log ("-------------------coba sendiri--------------------No 1");

const celciusJordan = 60;
console.log (celciusJordan, " => ", (celciusJordan * 9) / 5 + 32);
console.log ("-------------------Dari Kak Jordan--------------------No 1");


// Write a code to check whether the number is odd or even
/*
    Pseudocode 
    >> Example:
    25 odd number 
    2 even number

    >> input 
     let ganjil: 25
     let genap 2

    >> process
     menggunakan if statement untuk kondisionalnya 

    >> output
    menentukan ganjil genap yang sudah ditentukan 
    25 >> ganjil
    2 >> genap
*/

let genap = 2;
let ganjil = 25;

if (genap == 2 && ganjil == 25){
    console.log (`${genap} genap dan ${ganjil} ganjil`);
} 

console.log ("---------------------------------------------------No 2");

let number = 25;
console.log (number, " => ", number % 2 == 0 ? "even number" : "odd number");
console.log ("-------------------Dari Kak Jordan--------------------No 1");


// Write a code to check whether the number is prime number or not
/*
    Pseudocode 
    // example:
        7 >> is a prime number
        6 >> is not a prime number

    // input 
        let primeNum = 7
        let notPrimeNum = 6
    // process
        menggunakan for loop dan conditional untuk proses codingan 
        tersebut
    // output
         7 >> is a prime number
        6 >> is not a prime number

*/

// let primeNum = 7;
// let notPrimeNum = 6;

// let isPrime = true;

// if (notPrimeNum <= 1){
//     isPrime = false;
// } else {
// for (let i = 1; i <= primeNum; i++){
//     if (primeNum % i === 0){
//         isPrime = false;
//         break;
//     }
// }
//     // return primeNum;
//     // primeNum += i;
    
// } 
// if (isPrime){
//     console.log (`${primeNum} it is prime number`);
// } else  {
//     console.log (`${notPrimeNum} it is not prime number`);
// }
// console.log (`${primeNum}`);
console.log ("--------------------Error-----------------------------");


for (let number = 6; number <= 7; number++){
    let isPrime = true;
    
    for (let i = 2; i < number; i ++){
        if (number % i === 0){
            isPrime = false;
            // i === 2; continue;
            break;
        }
    }
    if (isPrime) {
        console.log (`${number} is a prime number`);
    } else {
        console.log (`${number} is not a prime number`);
    }
}
console.log ("---------------------------------------------------No 3");

// write a code to find the sum of the numbers 1 to N
/*
    Pseudocode 
    >> example:
        5 >> 1 + 2 + 3 + 4 + 5 = 15
        3 >> 1 + 2 + 3 = 6

    >> input 
        let number1 = 1
        let number2 = 5

    >> process
    menggunakan perulangan dan coditional pada example ini

    >> output
        5 >> 1 + 2 + 3 + 4 + 5 = 15
        3 >> 1 + 2 + 3 = 6
*/


let num = 5;
let num2 = 3;

let message = "SUM 1 to 5 => ";
let message2 = "SUM 1 to 3 => ";

let sum = 0;
for (let i = 1; i <= num; i++){
    sum += i;
    if (i == num ){
        message += i;
    } else {
        message += `${i} + `;
    }
}

let sum2 = 0;
for (let j = 1; j <= num2; j++){
    sum2 += j;
    if (j == num2){
        message2 += j;
    } else {
        message2 += `${j} + `;
    }
}


console.log (`${message} = ${sum}`);
console.log (`${message2} = ${sum2}`);
console.log ("---------------------------------------------------No 4");

// Write a code to find factorial of number
/*
    Psudocode 
    >> Example
        4! >> 4 x 3 x 2 x 1 = 24
        6! >> 6 x 4 x 3 x 2 x 1 = 720

    >> input 
     let angka = 1
     let angka = 4
     let message = String

    >> process
    menggunakan for loop dan conditional pada example ini

    >> output
        4! >> 4 x 3 x 2 x 1 = 24
        6! >> 6 x 4 x 3 x 2 x 1 = 720
*/

// let angka = 1;
// let angka2 = 4;
// let messageFac = "Factorial 4 to 1";

// for (let k = angka; k >= 4; k++){
//     if (k == angka2){
//         messageFac += k;
//     } else {
//         messageFac += `${k} x`;
//     }
//     // console.log (k);
//     angka += k;
// }
//  console.log (`${messageFac} ${angka}`)

console.log ("------------------------Error----------------------No 5");

// w
// fibonacci
numberF = 15;
let temp1 = 0;
let temp2 = 1;
let temp3 = 0;
for (let i = 2; i <= numberF; i++){
    temp3 = temp1 + temp2;
    temp1 = temp2;
    temp2 = temp3;

}
console.log (numberF, "->", temp3);
console.log ("---------------------Dari kak Jordan--------------No 6");
