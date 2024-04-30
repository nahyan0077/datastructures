function sum(n) {
    if(n<=1){
        return 1
    }
    return n + sum(n-1)
}

// console.log(sum(5));
// console.log(sum(-5));

function sumOdd(n) {
    if(n<=1){
        return 1
    }
    return (n%2!=0 ? n : 0) + sumOdd(n-1)
}
// console.log(sumOdd(5));

function sumOfEven(n) {
    if (n<=1) {
        return 0
    }
    return (n%2==0 ? n : 0) + sumOfEven(n-1)
}
// console.log(sumOfEven(6));

function sum(n) {
    if(n<=1){
        return 1
    }
    return n + sum(n-1)
}
// console.log(sum(5));

function sumEven(n) {
    if (n<=0) {
        return 0
    }
    return (n%2==0 ? n : 0) + sumEven(n-1)
}
console.log(sumEven(5));

function sumofOdd(n) {
    if(n<=0){
        return 0
    }
    return (n%2!=0 ? n : 0) + sumofOdd(n-1)
}

console.log(sumofOdd(5));