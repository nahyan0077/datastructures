// function arrayReverse(arr, start, end) {
//     if (start <= end) {
//         return
//     }
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     return arrayReverse(arr, start + 1, end - 1)
// }

// let arr = [1,2,3,4,5,3,2,6,8,56]
// arrayReverse(arr, 0, arr.length-1)

// console.log(arr);


// function reverseArray(arr,start,end) {
//     if(start>=end){
//         return
//     }
//     [arr[start],arr[end]] = [arr[end],arr[start]]
//     return (arr,start+1,end-1)
// }
// let arr = [1,2,3,4,5,6,7,8]
// reverseArray(arr,0,arr.length-1)
// console.log(arr);


function reverseArray(arr,start,end) {
    if(start == end){
        return
    }
    [arr[start],arr[end]] = [arr[end],arr[start]]
    return reverseArray(arr,start+1,end-1)
}

let arr1 = [2,3,4,66,8,5,3,5,7]
reverseArray(arr1,0,arr1.length-1)
console.log(arr1);
