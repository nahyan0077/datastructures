function recuBinrySrch(arr,left,right,target) {
    if (right >= left) {
        let mid = Math.floor((right+left)/2)
        if (arr[mid]==target) {
            return mid
        }
        if(target > arr[mid]){
            return recuBinrySrch(arr,mid+1,right,target)
        }else{
            return recuBinrySrch(arr,left,mid-1,target)
        }
    }
    return -1
}

console.log(recuBinrySrch([1,2,3,4,5,6,7,8],0,7,3));