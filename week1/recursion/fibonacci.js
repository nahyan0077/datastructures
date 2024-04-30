// function fib(n) {
//     if(n <= 1){
//         return n
//     }
//     return fib(n-1) + fib(n-2)
// }
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));

function fibo(n) {
    if (n<=1) {
        return n
    }
    return fibo(n-1) + fibo(n-2)
}


console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));