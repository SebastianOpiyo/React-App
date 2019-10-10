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

