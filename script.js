/*
for (let step = 0; step < 5; step++) {
// Runs 5 times, with values of step 0 through 4.
console.log('Walking east one step', step);
}


console.log('Out of the loop');
*/

/*

const array1 = [1,2,3,4,5]
// with for loop
for(let i=0; i<array1.length; i++){
  
console.log(array1[i] + 1)
  
}
// Output:
2,3,4,5,6

// break command comes out of the loop execution:
*/

/*
// For each - accesses each value/element of the array
const nums = [1,2,3,4,5]
// with forEach loop
nums.forEach(item => {
console.log("element is:",item )
})


*/

// For Each - value, index, array itself 
/*
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log( "Value at index position:",index,"is:",value + " of the array:",array,"\n");
  
}
*/

/*
// For in : gives you the index positions 
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x]+">>";
}
console.log(txt)
*/

/*
// For of - lets you access the values of the elements of the array directly.

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text +=   x + "\n";
}
console.log(text)
*/

/*
// while condition is true execute a piece of code
let text="",i=0;
while (i < 10) {
  text += "The number is " + i + "\n";
  i++;
}
console.log(text);
*/

// Do .. while loop : condition is checked after atleast 1 instance of the code has run

let text="";
let i=0;

do {
  text += "The number is " + i + "\n";
  i++;
}
while (i < 10);

console.log(text);

