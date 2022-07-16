//start
const string = 'The revolution will not be televised.';
console.log(string);

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

const badString = string;
console.log(badString);

//Single quotes vs. double quotes
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

// const badQuotes = 'What on earth?";

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

// const bigmouth = 'I've got no right to take my place…';
//tldr just use ""

//Escaping characters in a string using a \ before the character

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

//Concatenating strings

const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

//example with button
const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?'); //asks for user input in an alert box
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

//other ways of cancatenation using +

const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2); // "Hello, Chris"

//better alternative

const greeting3 = "Hello";
const name3 = "Chris";
console.log(`${greeting3}, ${name3}`); // "Hello, Chris"

const name4 = "Front ";
const number = 242;
console.log(`${name4}${number}`); // "Front 242"

//parse string to a number with "Number"

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum); //typeof returns the type of variable string,number,boolean,etc

//parse number to a string with "tostring()"

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

//including expressions in strings

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score / highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

//multiline strings

const output2 = `I like the song.
I gave it a score of 90%.`;
console.log(output2);  // I like the song.
// I gave it a score of 90%.

const output3 = 'I like the song.\nI gave it a score of 90%.';
console.log(output3);  // I like the song.
                    // I gave it a score of 90%.
