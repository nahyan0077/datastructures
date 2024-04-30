// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr) {
//     let sortedArr = []
//     while (leftArr.length && rightArr.length) {
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr,...leftArr,...rightArr]
// }

// let arr = [2,5,3,12,-2,-43,4,121]

// console.log(mergeSort(arr));


// function mergeSort(arr) {
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right) {
//     let sortedArr = []
//     while (left.length && right.length) {
//         if(left[0]<right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }

// let arr = [28,-14,6,2,7,-4,2,-2,-4]
// console.log(mergeSort(arr));



function mergeSort(arr) {
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
    let sortedArr = []
    while (left.length && right.length) {
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

let arr = [28,-14,6,2,7,-4,2,-2,-4]
console.log(mergeSort(arr));