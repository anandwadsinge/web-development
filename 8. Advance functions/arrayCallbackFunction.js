const a = [3,2,7,53,-1,-4,23,44,324,-8978]

const negative = (num) => {
    return num < 0;
}
// const result = a.find(negative);
// console.log(result);

// const result = a.findIndex(negative);
// console.log(result);

// a.forEach((num, i) => {
//     console.log('Array num', num, i);
// })



// Callback 👇
// A callback is a function that can be passed to another function as an argument

// 1
// console.log("Hello");
// setTimeout(() => {
//     console.log("This will execute later");
// }, 5000);

// console.log("World");


// 2
// function getBurger() {
//     setTimeout(() => {
//         const burger = "🍔"
//         console.log('Here is the burger');
//     }, 2000);
// }
// const result = getBurger();   //undefined - after 2 sec you will get output
// console.log(result);


// 3
// function getBurger(callback) {
//     setTimeout(() => {
//         const burger = "🍔"
//         console.log('Here is the burger');
//         callback(burger)
//     }, 2000);
// }

// getBurger((output) => {
//     console.log("Got the burger", output);
// })


// 4
// const names = ["Anand", "Abhay", "Akshata", "Sadhana"]
// names.forEach((names) => {
//     console.log(names);
// })


// 5
// const myNames = (array, cb) => {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         cb(element)
//     }
// }
// myNames (names, (name) => {
//     console.log(name);
// })


