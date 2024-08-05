// 1

/*
in math we know funciton as formula which makes everything easy for using
like a^2*b^2=c^2, D=b^2-4*a*c
in programing, that means also in javascript, functions help us do everything easier,
in programing it saves ur time too
*/


// 2

/*
function call is the way we call the function, like this:

javascript:
    function SumNumbers(a, b);

C#:
    public static int SumNumbers(int a, int b);

and where we want to use it we use like this

let num1 = 2;
let num2 = 5;

SumNumbers(num1, num2);
*/


// 3

/*
code block is the body of the code, which manages what the code should do to get to the result

function SumNumbers(a, b){
    return a + b;
}

code in the curly braces is the body
*/


// 4

function greetUser(name){
    return `Hello, ${name}!`;
}


// 5

function reverseString(str){
    let result = "";

    for(let i = str.length-1; i >=0; i--){
        result += str[i];
    }

    return result;
}


// 6

/*
defualt argument is argument you pass into the function predefined
if you execute the function and dont pass in the argument it wiil automatically execute the function with default value

its great to know that if you have many arguments in the function its great practice to add default argument last

function SumNumbers(a, b = 5);
*/


// 7

/*
scope is the body of a function or a class where if you declare a variable 
it will only be on that scope 
that means that the function is only returning that you will the it to return and other values will be gone
*/


// 8

/*
we use return value to let the function return value 
*/


// 9

/*
if function does not have return value its main popuse is to 
use console.log, and also you can validate variables and other stuf

like when user inputs the email and it will go through Check email function and it fill change it to "wrong input"
function CheckEmail(str){
    Regex = "regex_code";

    if(!isMatch(Email, Regex)){
        str = "Wrong email";    
    }
}
*/


// 10

// this code does not have return statement
// it should be like this

// function foo(x) {
//     return x * 2;
// }

// let x = 7;
// x = foo(x);
// console.log(x);


// 11

function bar(x = 8) {
    x += 1;
}

function foo() {
    bar(x);
    x *= 2;
}

let x = 7;
foo(x);
console.log(x)



// 12

// it should be 14


// 13

function sumOdds(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1){
            sum +=numbers[i];   
        }
    }
    return sum;
}


// 14

function isPalindrome(str){
    let halfOfstrLength = parseInt(str.length/2);

    for(let i = 0;  i < halfOfstrLength; i ++){
        if(str[i] !== str[(str.length-1)-i])
            return false;
    }
    
    return true;
}

