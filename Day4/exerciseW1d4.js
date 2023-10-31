// Create a function tht can create a triangle pattern according to the height we provide like the following:
// parameters: height => triangle height
// example input = 5

function trianglePattern(height){

for (let i = 1; i <= height; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row += j + " ";
    }
    console.log (row);
    }
}
trianglePattern(5);
console.log ("---------------------------------------------------------");


// Create a function that receiving array as input, and this function can find
// maximum value in array without using built in method in javascript
// parameters: array
// output: number
// example input: [10, 55, 79, 32]
// example output: 79

function maxNumber(arr){
    if (arr.length === 0){
        return undefined;
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let inputNumber = [10, 55, 79, 32];
let maxValueNumber = maxNumber(inputNumber);
console.log (inputNumber, " => ", maxValueNumber);
console.log ("---------------------------------------------------------");

// Create a function that can create a triangle pattern according to the height we provide like the following:
// parameters height => triangle height

// exercise w1d4
function trianglePattern2(height2){
    // let currentNumber = 1;
    let number = 0;
    
    for (let row = 1; row <= height2; row++){
        let result = ""; 
        for (let col = 0; col < row; col++){
    //    if (col > 1){
    //     result += " ";
    //    }
        number++;
        // result += currentNumber;
        result += number > 9 ? `${number} ` : `0${number} `;
        // currentNumber++;
    }
    // result += "\n";
    console.log (result);
}
// return result;
};

trianglePattern2(4);
// const height2 = 4;
// const triangleNumber = trianglePattern2(height2);
// console.log (trianglePattern2(4))
// trianglePattern2(4);
console.log ("--------------------------Error ^-------------------------------");
console.log ("--------------------------Dari Kak Jordan-------------------------------");


// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters: n => total looping
// example: n = 6 => 1, 2, Fizz, 4, Buzz, Fizz
// example: n = 15 => 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function FizzBuzz(n){
    for (let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log ("FizzBuzz");
        } else if (i % 3 === 0){
            console.log ("Fizz");
        } else if (i % 5 === 0){
            console.log ("Buzz");
        } else {
            console.log (i);
        }
    }
}
FizzBuzz(6);
console.log ("----F6 dan 15----");
FizzBuzz(15);
console.log ("---------------------------------------------------------");


// Create a function to calculate Body Mess Index (BMI)
// Formula: BMI = weight(kg) / (height (meter))** (** 2 kuadrat)
// Parameters: weight & height
// return values:
    /*

    <18.5 return "less weight"
    18.5 - 24.9 return "ideal"
    25.0 - 29.9 return "overweight"
    30.0 - 39.9 return "very overweight"
    >39.9 return "obesity"

     */
    

function calculateBMI(weight, height){

    let heightCM = height / 100;
    let heightCalculate = heightCM * heightCM;
    let BMI = weight / heightCalculate;

    if (BMI <= 18.5){
        console.log ("Less Weight");
    } else if (BMI >= 18.5 && BMI <= 24.9){
        console.log ("Ideal");
    } else if (BMI >= 25.0 && BMI <= 29.9){
        console.log ("Overweight");
    } else if (BMI >= 30.0 && BMI <= 39.9){
        console.log ("Very Overweight");
    } else if (BMI >= 39.9){
        console.log ("Obesity");
    } else {
        console.log ("Calculate BMI tidak tersedia");
    }
    return BMI;
}
console.log (Math.floor (calculateBMI (106, 178)));
console.log ("---------------------------------------------------------");


// Write a function to remove all odd numbers in a array and return a new array that contains even number only
// example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [2, 4, 6, 8, 10]


function removeOdd(arr){

    let evenNumber = [];

    for (let i = 0; i <= arr.length; i++){
        if (arr[i] % 2 === 0) {
            // return (i);
            evenNumber.push(arr[i]);
        // } else {
        //     return undefined;
        }
    }
    return `[${arr}] => `+ `[${evenNumber}]`;
}
console.log (removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log ("---------------------------------------------------------");


// Write a function to split a string and convert it into an array of word
// example: "Hello World" => ["Hello", "World"]

function splitWord (string){

    let word = string.split(" ");
    return word;

}

let string = "Hello World";
let result = splitWord(string);

console.log (result);