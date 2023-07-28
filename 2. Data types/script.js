// Types of data type in Javascript

// There are 2 types primitive & non-primitive datatype

// * Primitive datatype
// Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Null
// 6. Undefined
// 7. Symbol //Symbols are immutable (cannot be changed) and are unique > [ex. sym]

// * Non-primitive Datatype
// 1. Object

let a = 'Anand';
let b = 24;
let c = true;
let d = 789237893247812741798412;
let e = null;
let f;
const sym1 = Symbol('hello')
const sym2 = Symbol('hello')
// two symbols with the same description 
console.log(sym1 === sym2); //false
console.log(a,b,c,d,e,f);



// Javascript type conversion
// Reference - https://www.w3schools.com/jsref/jsref_type_conversion.asp

let A = 22;
A = A+1;
console.log('The value of A is' , A, 'and', 'type of A is', typeof(A)); // 23 
//here it added to a number value

A = '23'
A = A + 1;
console.log('The value of A is' , A, 'and', 'type of A is', typeof(A)); //231
//here it considered A as string and concatinated string to the defined value

//For boolean Javascript consider 0, null, undefined, NaN as false and all non-zero values as true
let B = 1;
B = Boolean(B)
console.log('The type of B is', B);
