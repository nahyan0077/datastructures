function checkValidParanthesis(parathes) {
    let obj ={
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack = []
    for(let i=0;i<parathes.length;i++){
        if(obj[parathes[i]]){
            stack.push(obj[parathes[i]])
        }else if(stack.length>0 && stack[stack.length-1]==parathes[i]){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length === 0
}

console.log(checkValidParanthesis("(){}[]"))
console.log(checkValidParanthesis("(]){}[]"))
console.log(checkValidParanthesis("([])"))