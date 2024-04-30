function insertion(arr) {
    for(let i=0;i<arr.length;i++){
        let num = arr[i]
        let j = i - 1
        while (j>=0 && arr[j] > num) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = num
    }
    return arr
}

let arr = [2,5,3,12,-2,-43,4,121]

console.log(insertion(arr))
