// write a code to display the multiplication table of a given integer
/*
    example: number 1 > 9
    
    input
        number = 1
        numberResult= 9
        message = "x";

    process
    menggunakan looping dan bbrp cinditional pada example ini

    output
    perkalian 9 x 1
*/
let number = 9;

for (let i = 1; i <= 10; i++){
    // const result = 9 * i;
    console.log (`${number} x ${i}`);
}
console.log("--------------------------------------------------------");

let numJ = 9;
for (let iJ = 1; iJ <= 10; iJ++){
    console.log (`${numJ} x ${iJ} = ${numJ * iJ}`);
}
console.log("--------------------------Dari Kak Jordan------------------------------");


// write a code to check wheter a string is a palindrome or not
/*
    example: "madam" => palindrome

    input
        palindrome : madam
    process
        perulangan
    output
    madam di balik madam
*/
console.log ("------------------Error-----------------------------");
let word = "madam";
let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++){
    if (word[i] !== word[word.length - 1 - i]){
        isPalindrome = false;
        break;
    }
    // temp += i;
}
if (isPalindrome){
    console.log (`${word}`)
}
console.log ("-----------------------------------------------");

let string = "madam";
let reverseString = "";

for (let iPalindrome = string.length - 1; iPalindrome >= 0; iPalindrome--){
    reverseString += string.charAt(iPalindrome);
}
console.log (string, string === reverseString ? "Palindrome" : "not Palindrome");
console.log("--------------------------Dari Kak Jordan------------------------------");

// write a code to convert centimeter to kilometer
/*
    example: 
        100000 => 1 km
    input
    process
    output
*/

let centimeter = 100000;
let kilometer = 0;
// let  = "km";

for ( let i = centimeter; i >= 100000; i -= 100000){
    kilometer++;
}
console.log (`${centimeter / 100000} km`);
console.log ("-----------------------------------------------");

let cm = 100000;
console.log (cm, `-> ${cm / 100000} km`);
console.log("--------------------------Dari Kak Jordan------------------------------");


// write a code to format number as currency (IDR)
/*
    example:
     1000 => Rp. 1000,00

     input
     process
     output

*/

let nominal = 1000;
console.log (nominal, `Rp. ${nominal.toLocaleString("id-ID")},00`);
console.log("--------------------------Dari Kak Jordan------------------------------");

// write a code to remove the first occurrence of a given "search string" from a string
//  example: string = "Hello world", search string = "ell" -> "Ho world"
let stirngSearch = "Hello world";
let search = "ell";
console.log (stirngSearch.replace(search, ""));
console.log("--------------------------Dari Kak Jordan------------------------------");

// Write a code to capitalize teh first letter of each word in a string
// Example: "hello world" -> "Hello World"

let capitalize = "";
let stringCapitalize = "Hello world";

for (let j = 0; j <= stringCapitalize.length; j++){
    if (j == 0 || stringCapitalize.charAt(j - 1) == " ") {
    capitalize += stringCapitalize.charAt(j).toUpperCase();
} else {
    capitalize += stringCapitalize.charAt(j).toLowerCase();
    }
}
console.log (`"${stringCapitalize}" to "${capitalize}"`);
console.log("--------------------------Dari Kak Jordan------------------------------");

// write a code to reverse a string
// example: "hello" -> "olleh"

let stringNormal = "hello";
let reverseString2 = "";
for (let k = stringNormal.length - 1; k >= 0; k--){
    reverseString2 += stringNormal.charAt(k);
}
console.log (stringNormal, "->", reverseString2);
console.log("--------------------------Dari Kak Jordan------------------------------");

// Write a code to swap the case of each character from string
// example: "The QuiCk BrOWN Fox" => "tHE qUIck bRown fOX"

let stringSwap = "The QuiCk BrOwN Fox";
let swap = "";

for (let i = 0; i < stringSwap.length; i++){
    if (stringSwap.charAt(i).toUpperCase() == stringSwap.charAt(i)){
        swap += stringSwap.charAt(i).toLowerCase();
    } else {
        swap += stringSwap.charAt(i).toUpperCase();
    }
}
console.log (swap);
console.log("--------------------------Dari Kak Jordan------------------------------");

// Write a code to find the largest of two given integers
// example : num1 = 42, num2 = 27 => 42

let numLargest = 42;
let num2Largest = 27;
console.log (numLargest, num2Largest, "=>", numLargest > num2Largest ? numLargest : num2Largest);
console.log("--------------------------Dari Kak Jordan------------------------------");

// write a conditional statement to sort three numbers
// example: num1 = 42, num2 = 27, num3 = 18 => 18,27,42

let lowestNumber = 18;
let middleNumber = 27
let highestNumber = 42;

let resultNumber = [lowestNumber, middleNumber, highestNumber];

console.log ("num1 =", highestNumber, "num2 =", middleNumber, "num3 =", lowestNumber, "=>", resultNumber.sort((a,b) => a - b));
console.log("------------------------------------------------------------");

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
// example: "hello" => 1

let input = "hello";

if (typeof input === "string"){
    console.log (input, "=>", 1);
} else if (typeof input === "number"){
    console.log (input, "=>", 2);
} else {
    console.log (3);
}
console.log("------------------------------------------------------------");

// Write a code to change every letter a into * from a string of input
// example: "An apple a day keeps the doctor away" => "*n *pple * d*y keeps the doctor *w*y"

let stringLetter = "An apple a day keeps the doctor away";
console.log (stringLetter.replace(/a/gi, "*"), "(contoh 1)"); // contoh 1

let stringLetter2 = "An apple a day keeps the doctor away";
let replace = "";

for (let j = 0; j < stringLetter2.length; j++){
    if (stringLetter2.charAt(j).toLocaleLowerCase() == "a"){ 
        replace += "*";
} else {
    replace += stringLetter2.charAt(j);
    }
}
console.log (replace, "(contoh 2)");
console.log("--------------------------Dari Kak Jordan------------------------------");
