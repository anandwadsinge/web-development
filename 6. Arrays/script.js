// An array is an object that stores multiple values at once.

const words = ["apple", "banana", "cherry", 12, true, {
    name: 'Anand',
    age: 28
}];
console.log(words);
console.log(words[5].name);


const count = [1,3,5,6,788,545,32,3254,55]
console.log(count.indexOf(788));  //returns the position
console.log(count.includes(8789));  //returns true or false if the value is present or not
console.log(count, count.push(6767));  //adds a new element to the end of an array
console.log(count, count.unshift(0))  // add a new element to the beginning of the array
console.log(count, count.pop())  // removes the last element of the array
console.log(count, count.shift())  // removes the first element of the array
count.sort() // sorts the element in ascending order
console.log(count);


