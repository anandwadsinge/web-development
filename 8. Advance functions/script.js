// Arrow function

//1
// const greet = () => console.log("Hi Anand");
// greet();


//2
// const count = (sum) => {
//     for (let i=0; i<sum; i++) {
//         console.log("Hello World", sum);
//     }
// }
// count(3)


//3
// const square = (num) => num * num
// console.log(square(3));


//4
// const square = (num) => {
//     return num * num
// }
// console.log(square(3));



// Callback function 👇👇👇




//5
const calculate = (a, b, operation) => {
    return operation(a,b)
}
// method 1
const addition = calculate(3,4, function(num1, num2) {
    return num1 + num2 
})
console.log(addition);

// method2
const substraction = (a, b) => a - b;
const result = calculate(8,3, substraction)
console.log(result);

//method3
function multiply(a,b) {
    return a*b;
}
const mulResult = calculate(3,2, multiply)
console.log(mulResult);