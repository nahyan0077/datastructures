// function quick(arr) {
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let leftArr = []
//     let rightArr = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quick(leftArr),pivot,...quick(rightArr)]
// }
// let arr = [1,5,-23,56,-54,-67,32,632,-12]
// console.log(quick(arr));


function quick(arr) {
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

let arr = [1,5,-23,56,-54,-67,32,632,-12]

console.log(quick(arr));