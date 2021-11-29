////////////////////////////
//////STRINGS//////////////
//////////////////////////

// REPLACE
/*The replace() method returns a new string with some 
    or all matches of a pattern replaced by a replacement. 
    The pattern can be a string or a RegExp, and the replacement 
    can be a string or a function to be called for each match.*/

// Add a space before the Uppercase letter in a camelCase string
str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

// TEST
let testStr = 'freeCodeCamp';
let testRegex = /Code/;
testRegex.test(testStr); //returns true

// MATCH -> extract the match
let ourStr = 'Regular expressions';
let ourRegex = /expressions/;
ourStr.match(ourRegex); //return ["expressions"]

//SUBSTRING -> returns a part of a string
str.substring(fromIndex, toIndex);
str = str[0].toLowerCase() + str.substring(1); //Change the first letter to Upper Case

//SPLIT -> The split() function separates an original string into substrings,
//based on a separator string that you pass as input.
'Hello. I am a string. You can separate me.'.split('.');
// output is [ "Hello", " I am a string", " You can separate me", "" ]

/* 20 String Methods */

var stringOne = 'freeCodeCamp is the best place to learn';
var stringTwo = 'frontend and backend development';

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()
console.log(stringOne.charCodeAt(1)); //to ASCII characters

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith('to'));

// fromCharCode()
console.log(String.fromCharCode(114)); //from ASCII characters

// includes()
console.log(stringTwo.includes('end'));

// indexOf()
console.log(stringTwo.indexOf('end'));

// lastIndexOf()
console.log(stringTwo.lastIndexOf('end'));

// match()
console.log(stringTwo.match(/end/g));

// repeat()
console.log(stringOne.repeat(3));

// replace()
console.log(stringTwo.replace(/end/g, 'END'));

// search()
console.log(stringTwo.search('end'));

// slice()
console.log(stringTwo.slice(2, 4));

// split()
console.log(stringOne.split(' '));

// startsWith()
console.log(stringOne.startsWith('free'));

// substr()
console.log(stringTwo.substr(2, 4));

// substring()
console.log(stringTwo.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringOne.toUpperCase());

// trim()
var stringThree = '     Subscribe now!      ';
console.log(stringThree.trim());

//break camelCase sentences
// complete the function
const solution = (string) => string.replace(/([a-z])([A-Z])/g, '$1 $2');