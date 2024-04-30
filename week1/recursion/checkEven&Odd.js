function checkEven(n) {
    if(n==0){
        return true
    }else if(n==1){
        return false
    }
    return checkEven(n-2)
}
// console.log(checkEven(1));
// console.log(checkEven(2));
// console.log(checkEven(3));
// console.log(checkEven(4));
// console.log(checkEven(5));


function checkOdd(n) {
    if(n==1) return true
    else if (n==0) return false
    return checkOdd(n-2)
}
// console.log(checkOdd(1));
// console.log(checkOdd(2));
// console.log(checkOdd(3));
// console.log(checkOdd(4));
// console.log(checkOdd(5));


function checkEven(n){
    if(n==0){
        return true
    }else if(n==1){
        return false
    }
    return checkEven(n-2)
}
console.log(checkEven(5));

function checkOdd(n) {
    if(n==0){
        return false
    }else if(n==1){
        return true
    }
    return checkOdd(n-2)
}
console.log(checkOdd(5));