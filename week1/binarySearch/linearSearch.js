let arr = [1,2,3,4,5,4,3,5,3]

function linearSearch(val){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == val){
            return i
        }
    }
    return -1
}
console.log(linearSearch(4));

