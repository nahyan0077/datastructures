class Stack {
    constructor() {
        this.stack = []
    }
    isEmpty(){
        return this.stack.length == 0
    }
    push(ele){
        this.stack.push(ele)
    }
    pop(){
        if (this.isEmpty()) {
            return null
        }
        return this.stack.pop()
    }

}

// function reverseString(str) {
//     const stack = new Stack()
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//     }
//     let reversedString = ''
//     while (!stack.isEmpty()) {
//         reversedString += stack.pop()
//     }
//     console.log(reversedString);
// }



function reverseString(str) {
    let stk = new Stack()
    for(let i=0;i<str.length;i++){
        stk.push(str[i])
    }
    let prnt = ''
    while (!stk.isEmpty()) {
        prnt += stk.pop()
    }
    console.log(prnt);
}

str = 'nahyan_ny'
reverseString(str)