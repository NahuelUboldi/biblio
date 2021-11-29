letconst items = [
    {name: "Bike", price: 100},
    {name: "Tv", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25},
];
/////////////////////////////////////
///////////// METHODS////////////////
////////////////////////////////////

//---FILTER---//
// filter -> returns all the items that fulfill the condition
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
    //filter the elements of arr2 in the arr1
    let arr1 = [1,2,3,4];
    let arr2 = [2,4];
    let result = arr1.filter(item => !arr2.includes(item)); //it will console.log [1,3]

//---MAP---//
// map -> return all the items of an object in a new array
const itemNames = items.map((item) => {
    return item.name;
});
const mapedOneLiner = items.map(item => item.name);//one line function
const mapedTwoProps = items.map(item => ({
    name: item.name,
    price: item.price,
  }));

//---FIND---//
// find -> return the first item that returns true
const foundItem = items.find((item) => {
    return item.name === 'Album';
});

//---FOR EACH---//
// for each -> perform the action pased with the function to every item in the array
items.forEach((item) => {
    console.log(item.price);
});

//---SOME---//
// some -> return true if only one of all the items is true and false if every items are false
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});

//---EVERY---//
// every -> return true if every items fulfill the condition and false if only one doest
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100;
});

//---REDUCE---//
// reduce -> return the sum of every item in the array
const total = items.reduce((currentTotal/*accumulator*/, item/*current item*/) => {
    return item.price + currentTotal;
}, 0/* initial value for the accumulator*/);
const reduceOneLiner = items.reduce((sum, item) => sum + item.price, 0);

//---INCLUDE---//
// include -> true if the array contains any items of the parameter and false if it dont
const itemsArr = [1,2,3,4,5]
const includesTwo = items.includes(2); // true -> the array has a 2
const includesSeven = items.includes(7); //false -> the array doesnt have a 7

//---CONCAT---//
//concat -> concatena dos arrays
arr1 = [1,2,3];
arr2 = [4,5,6];
arr1.concat(arr2);

//---SORT---//
//sort
    // sort numbers
    const numbers = [2,13,55,879,04,105];
    numbers.sort((a,b) => a - b); // ascending order
    numbers.sort((a,b) => b - a); // descending order
      
    //sort the alphabet in order
    function orderAlpha(arr) {
        return arr.sort(function(a, b) {
            return a === b ? 0 : a > b ? 1 : -1;
        });
    }

    //sort -> reverse aplphabet
    function reverseAlpha(arr) {
        return arr.sort(function(a, b) {
            return a === b ? 0 : a < b ? 1 : -1;
        });
    }
    orderAlpha(['l', 'h', 'z', 'b', 's']);
    reverseAlpha(['l', 'h', 'z', 'b', 's']);

//---SPLIT---//
//Split -> split a string into an array of strings. it takes an argument for the delimiter
const stringToSplit = "Hello World";
const stringSplited = stringToSplit.split(" "); //returns -> ["Hello", "World"]

//---JOIN---//
//join
var arr = ["Hello", "World"];
var str = arr.join(" "/* delimiter */);

//---FLAT---//
//todos los elementos de sub-array concatenados
//como parámetro se puede especificar la profundidad deseada (por defecto 1)
[1, 2, [3, 4, [5, 6]]].flat();// [1, 2, 3, 4, 5, 6]

//Convert paired arrays in to an object
const exArr = [[21, "Bowling Ball"],[2, "Dirty Sock"],[1, "Hair Pin"],[5, "Microphone"]];

const arrToObj = (arr) => {
  const res = arr.reduce((acc, it) => {
    return {        
      ...acc,
      [it[1]]: it[0],
    };
  }, {});
  return res;
};

const ej = arrToObj(exArr);
console.log(ej);


