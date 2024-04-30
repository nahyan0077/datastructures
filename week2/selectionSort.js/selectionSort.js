// function selectionSort(arr) {
//     let i = 0
//     while(i<arr.length){
//         let minIndex = i
//         let j = i + 1
//         while(j<arr.length){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//             j++
//         }
//         if (minIndex != i) {
//             [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//         }
//         i++
//     }
//     return arr
// }
// let arr = [2,5,3,12,-2,-43,4,121]
// console.log(selectionSort(arr))



function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!=i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

let arr = [28,-14,6,2,7,-4,2,-2,-4]
console.log(selectionSort(arr));