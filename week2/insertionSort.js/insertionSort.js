// function insertionSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         let numberToInsert = arr[i]
//         j = i - 1
//         while (j>=0 && arr[j]>numberToInsert) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = numberToInsert  
//     }
// }

// let arr = [28,-14,6,2,7,-4,2,-2,-4]
// insertionSort(arr)

// console.log(arr);



function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let num = arr[i]
        let j = i - 1
        console.log("first",arr);
        while (j >= 0 && arr[j] > num ) {
            arr[j+1] = arr[j]
            console.log("second",arr);
            j--
        }
        arr[j+1] = num
        console.log(arr);
    }
}
let arr = [28,-14,6,2,7,-4,2,-2,-4]
insertionSort(arr)

console.log(arr);