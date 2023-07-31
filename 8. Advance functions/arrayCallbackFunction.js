const a = [3,2,7,53,-1,-4,23,44,324,-8978]

const negative = (num) => {
    return num < 0;
}
// const result = a.find(negative);
// console.log(result);

// const result = a.findIndex(negative);
// console.log(result);

a.forEach((num, i) => {
    console.log('Array num', num, i);
})





