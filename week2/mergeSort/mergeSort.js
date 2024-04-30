function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length /2)
    console.log(mid);
    let leftArr = arr.slice(0,mid)
    console.log("left",leftArr);
    let rightArr = arr.slice(mid)
    console.log("right",rightArr);
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
        console.log("sorted",sortedArr);
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

let arr = [28,-14,6,2,7,-4,2,-2,-4]

console.log(mergeSort(arr))
