// function bubble(arr) {
//     let swapped
//     do {
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if (arr[i]>arr[i+1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);

// }

// let arr = [1,5,-23,56,-54,-67,32,632,-12]
// bubble(arr)
// console.log(arr);


// function bubble(arr) {
//     let swapped
//     do {
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
// }

// let arr = [1,5,-23,56,-54,-67,32,632,-12]
// bubble(arr)
// console.log(arr);

// O(n^2)


function bubble(arr) {
    let swapped
    do {
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
        
    } while (swapped);
}

let arr = [1,5,-23,56,-54,-67,32,632,-12]
bubble(arr)
console.log(arr);