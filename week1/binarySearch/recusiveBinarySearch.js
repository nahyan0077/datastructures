function binaySearch(arr, left, right, target) {
    if (left <= right) {
        let mid = Math.floor((right + left) / 2)

        if (arr[mid] == target) {
            return mid
        }

        if (target > arr[mid]) {
            return binaySearch(arr, mid + 1, right, target)
        } else {
            return binaySearch(arr, left, mid - 1, target)
        }
    }
    return -1
}

let arr = [1, 2, 3, 4, 5, 4, 3, 5, 3]
console.log(binaySearch(arr, 0, arr.length - 1, 5))