// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//             if(minIndex != i){
//                 [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//             }
//         }
//     }
//     return arr
// }
// let arr = [1,5,-23,56,-54,-67,32,632,-12]
// selectionSort(arr)
// console.log(arr);

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if (minIndex != i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

let arr = [1,5,-23,56,-54,-67,32,632,-12]
selectionSort(arr)
console.log(arr);