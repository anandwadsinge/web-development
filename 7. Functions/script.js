
//function declaration - it supports hoisting
sum(5,10)
function sum(a,b) {
    const sum = a + b;
    console.log('Result:', sum);
}



//function expression - it does not support hoisting
const square = function (num) {
    return num * num;
}
console.log(square(3));


//nested function

function addSquare(a,b) {
    const sa = square(a);
    const sb = square(b);

    function square(num) {
        return num * num;
    }
    return sa + sb;
}

console.log(addSquare(3,5));