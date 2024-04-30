// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length-1; i++) {
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
// }

// let arr = [2,9,-2,-4,2,7,3-2,4,-5]
// bubbleSort(arr)
// console.log(arr);



function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for(let i=0;i<arr.length;i++){
            if (arr[i+1]<arr[i]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped);
    return arr
}
let arr = [2,5,3,21,4,-23,34,-2,34]
console.log(bubbleSort(arr));