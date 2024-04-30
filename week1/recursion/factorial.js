// function fact(n) {
//     let fa = 1
//     while (n!=0) {
//         fa *= n
        
//         n--
//     }
//     console.log(fa);
// }
// fact(5)

function fact(n){
    if(n<=1){
        return 1
    }
    return n *= fact(n-1)
}
// console.log(fact(5));

function fact(n) {
    let sum = 1
    while (n!=0) {
        sum *= n
        n--
    }
    return sum
}
// console.log(fact(5));

function fact(n) {
    if(n<=1){
        return 1
    }
    return n * fact(n-1)
}

console.log(fact(5));