// function isPalindrom(str) {
//     if(str.length < 2){
//         return true
//     }
//     if(str[0] == str[str.length-1]){
//         return isPalindrom(str.slice(1,-1))
//     }
//     return false
// }

// let str = "nayhan"
// console.log(isPalindrom(str))


// function reverse(str, start, end) {
//     if(start >= end){
//         return str
//     }
//     [str[start], str[end]] = [str[end], str[start]]
//     return reverse(str, start+1, end-1)
// }
// let str = "nayhan"
// console.log(reverse(str.split(''), 0, str.length-1).join(''));

// function checkPalindrom(str) {
//     if(str.length < 2){
//         return true
//     }
//     if(str[0] == str[str.length - 1]){
//         return checkPalindrom(str.slice(1,-1))
//     }
//     return false
// }
// console.log(checkPalindrom([1,2,3,4,3,2,1]));

function paindro(arr) {
    if (arr.length < 2) {
        return true
    }
    if(arr[0] == arr[arr.length-1]){
        return paindro(arr.slice(1,-1))
    }
    return false
}

console.log(paindro([1,2,3,4,3,2,1,1]));