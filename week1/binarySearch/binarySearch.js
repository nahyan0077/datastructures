// function binaySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length
//     while (rightIndex >= leftIndex) {
//         let midIndex = Math.floor((rightIndex + leftIndex)/2)
//         if (target == arr[midIndex] ) {
//             return midIndex
//         }
//         if(target > arr[midIndex]){
//             leftIndex = midIndex + 1
//         }else{
//             rightIndex = midIndex -1
//         }
//     }
//     return -1
// }

// console.log(binaySearch([1,2,3,4,5,4,3,5,3],4))


function binarySearch(arr, left, right, target) {
    if(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]==target){
            return target
        }
        if (target > arr[mid]) {
            return binarySearch(arr,mid+1,right,target)
        }else{
            return binarySearch(arr,left,mid-1,target)
        }
    }
    return -1
}
// console.log(binarySearch([1,2,3,4,5,4,3,5,3,66],0,9,66))



function iterativeBinary(arr, target) {
    let left = 0
    let right = arr.length-1
    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        if (target == arr[mid]) {
            return mid
        }
        if (target > arr[mid]) {
            left = mid + 1
        }else{
            right = mid-1
        }
    }
    return -1
}

// console.log(iterativeBinary([1,2,3,4,5,4,3,5,3,66],3));

function itBinary(arr,target) {
    let left = 0 
    let right = arr.length - 1
    while(left<=right){
        let mid =Math.floor((left+right)/2)
        if(arr[mid] == target){
            return mid
        }else if(target > arr[mid]){
            left = mid + 1
        }else{
            right = mid-1
        }
    }
    return -1
}
// console.log(itBinary([1,2,3,4,5,4,3,5,3,66],3));

function recuBinary(arr,left,right,target) {
    if (left<=right) {
        let mid =Math.floor((left+right)/2)
        if(arr[mid] == target){
            return mid
        }else if(target > arr[mid]){
            return recuBinary(arr,mid+1,right,target)
        }else{
            return recuBinary(arr,left,mid-1,target)
        }
    }
    return -1
}
console.log(recuBinary([1,2,3,4,5,4,3,5,3,66],0,9,66));