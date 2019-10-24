// DESTRUCTURING

// 1. The old way
var names = {1:'Sebastian', 2:'Martin', 3:'Conso'};
var sirNames = {x:'Opiyo', y:'Odongo', z:'Oduor'};

// console.log(names[1]); // This is how we extract content from the object when key is a num
// console.log(sirNames.x); // Else, we use the dot notation.

// 2. Giving the variables names
const{x,y,z} = sirNames;
// const{[1],[2],[3]} = names; // doesn't work
// console.log(z);
// console.log([1]); // works fine

// 3. giving the variables new names
const{x:a, y:b, z:c} = sirNames;
// console.log(c);

// 4. We can also assign var from nested objects
const nest = {
    start:{x:3, y:9},
    end: {x:8, y:20}
};

const {start:{x:startX, y:startY}} = nest;
// console.log(startY); // 9 is the answ

// 5. assigning var from arrays
const [s,l] = [1, 3, 5, 6, 10];
// console.log(s, l);
const [nx,lm,,,sd] = [1, 3, 5, 6, 10];
// console.log(sd);

// 6. Using the rest operator to reassign array elems.

const [nm,ml, ...rest] = [1, 3, 5, 6, 10];
// console.log(nm, ml);
// console.log(rest); // returns a list of the remaining.


// 7. Pass an object as a function parameter and destructure its vars
// normally we would have:

// const profileData = {name:'Sebastian', age:34, school:'USIU'};
// const profileUpdate = (profileData) => {
//     // we do something with the profileData
//     const{name:x, age:y, school:z} = profileData;
// }

// alternatively we can just deconstruct right away within the parameters vals
// const profileUpdate = ({name, age}) => {
//     // we do something with the profileData
//     // we do not need to deconstruct here.
// }

// Higher Order Functions

var animals = [
    {name: 'Oodoo', species: 'carasco'},
    {name: 'Oslo', species: 'dubious'},
    {name: 'Olka', species: 'Soldier'},
    {name: 'Fallen', species: 'Soldier'},
    {name: 'Octopus', species: 'marvel'}
]

/*
var soldier = animals.filter(function(animals){
    return animals.species === 'Soldier';
})
*/
// console.log(soldier); // the filter function returns a list of the filtered elems

// the below function only checks whether an animal is a soldier.
var soldier = function(animals){
    return animals.species === 'Soldier';
};

var isSold = animals.filter(soldier);

// var notSolder = animals.reject(soldier); // does the opposite of filter function
// 'reject' not working.
// console.log(isSold);
// console.log(notSolder);

// Using map function

/*
let animNames = animals.map(function(animal) {
    return animal.name;
})
*/

//  rewrite the above code using arrow functions
// this is even more elegant.
let animNames = animals.map((animal)=>animal.name);
// console.log(animNames);


// REDUCE FUNCTION
// reduce is a super list transformation function.

let orders = [
    {amount:250},
    {amount:400},
    {amount:560},
    {amount:230}
]

// using the normal for-loop function to get the total
// let totalAmt=0;
// for(var i = 0; i < orders.length; i++) {
//  totalAmt += orders[i].amount;
// }

// console.log(totalAmt);

// using REDUCE function to do the same.

let totalAmt = orders.reduce(function(sum, order) {
    console.log(sum, order);  // the iteration will take an amt from the order and add to sum increamentally
    return sum + order.amount;
}, 0); // we set the initial value i.e sum to 0

console.log("The total amount is: " + totalAmt);

// Reference material for the javascript high-level functions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex