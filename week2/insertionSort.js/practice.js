// function insertion(arr) {
//     for(let i=0;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > temp) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }
// let arr = [1,5,-23,56,-54,-67,32,632,-12]
// insertion(arr)
// console.log(arr);


// function insertion(arr) {
//     for(let i=0;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while (j>=0 && arr[j]>temp) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// let arr = [1,5,-23,56,-54,-67,32,632,-12]
// insertion(arr)
// console.log(insertion(arr));




// function insertionSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         let num = arr[i]
//         let j = i - 1
//         while (j>=0 && arr[j]>num) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = num
//     }
//     return arr
// }

// let arr = [28,-14,6,2,7,-4,2,-2,-4]
// console.log(insertionSort(arr));



function insertionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let num = arr[i]
        let j = i - 1
        while (j>=0 && arr[j]>num) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = num
    }
    return arr
}

let arr = [28,-14,6,2,7,-4,2,-2,-4]
console.log(insertionSort(arr));