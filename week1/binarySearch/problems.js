function binarySearch(arr,target) {
    let left = 0
    let right = arr.length
    while (right >= left) {
        let mid = Math.floor((right + left)/2)
        if(arr[mid] == target){
            return mid
        }
        if(target > arr[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8],3));