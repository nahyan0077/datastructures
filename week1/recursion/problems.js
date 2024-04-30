/////////////////////////////--------------factorial of number

// function fact(n){
//     if(n<=2){
//         return n
//     }
//     return n * fact(n-1) 
// }

// console.log(fact(5))



//////////////////////////////----------sum of n numbers

// function sum(n) {
//     if(n==1){
//         return 1
//     }
//     return n + sum(n-1)
// }

// console.log(sum(5))

/////////////////////////////---------------reversing an array 

// function reverse(arr, start, end) {
//     if(start == end){
//         return
//     }
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     return reverse(arr, start + 1, end - 1)
// }
// let arr = [1,2,3,4,5,3,2,6,8]
// reverse(arr, 0, arr.length-1)
// console.log(arr);


///////////////////////////////////////------------fibonacci

// function fibo(n) {
//     if(n<=1){
//         return n
//     }
//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(1));


/////////////////////////-------------------check even

// function is_Even(n) {
//     if(n<0){
//         n = Math.abs(n)
//     }
//     if(n==0){
//         return true
//     }else if(n==1){
//         return false
//     }
//     return is_Even(n-2)
// }

// console.log(is_Even(-31));



////////////////////////////----------------check odd

    // function is_Odd(n) {
    //     if(n<0){
    //         n = Math.abs(n)
    //     }
    //     if(n==1){
    //         return true
    //     }else if(n==0){
    //         return false
    //     }
    //     return is_Odd(n-2)
    // }
    
    // console.log(is_Odd(231));



//////////////////////////////////-------------sum of n odd numbers

// function sumOfOdds(n) {
//     if (n <= 0) {
//         return 0
//     }
//     return (n % 2 != 0 ? n : 0) + sumOfOdds(n-1)
// }
// console.log(sumOfOdds(1));
// console.log(sumOfOdds(2));
// console.log(sumOfOdds(3));
// console.log(sumOfOdds(4));


///////////////////////////////------------sum of n even numbers

// function sumOfEven(n) {
//     if(n <= 0){
//         return 0 
//     }
//     return (n % 2 == 0 ? n : 0) + sumOfEven( n - 1 )
// }
// console.log(sumOfEven(1));
// console.log(sumOfEven(2));
// console.log(sumOfEven(3));
// console.log(sumOfEven(4));
// console.log(sumOfEven(5));



