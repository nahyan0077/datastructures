// class Stack {
//     constructor() {
//         this.items = []
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     push(element){
//         this.items[this.size] = element
//         this.size++
//         return this.size - 1
//     }
//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         let rmvElement = this.items[this.size - 1]
//         this.size--
//         return rmvElement
//     }
//     //to see the top element in the stack 
//     peek(){
//         if (this.isEmpty()) {
//             return null
//         }
//         return this.items[this.size - 1]
//     }

//     print(){
//         if (this.isEmpty()) {
//             console.log("the stack is empty...");
//             return null
//         }
//         let prnt = ''
//         for(let i=0;i<this.size;i++){
//             prnt += `${this.items[i]} `
//         }
//         console.log(prnt);
//     }
// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop()
// console.log(stack.peek());
// stack.print()



class Stack {
    constructor() {
        this.stack = []
    }
    isEmpty(){
        return this.stack.length == 0
    }
    push(val){
        this.stack.push(val)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length - 1]
    }
    display(){
        if(this.stack.length==0){
            console.log("the stack is empty....");
        }else{
            let prnt = ''
            for(let i=0;i<this.stack.length;i++){
                prnt += this.stack[i] + " "
            }
            console.log(prnt);
        }
    }
    rmvMid(){
        let mid = Math.floor(this.stack.length/2)
        let temp = []
        for(let i=0;i<mid;i++){
            temp.push(this.stack.pop())
        }
        let rmv = this.stack.pop()
        while (temp.length) {
            this.stack.push(temp.pop())
        }
        return rmv
    }
}


const stk = new Stack()

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.pop()
console.log(stk.rmvMid());
stk.display()


function reverseString(str) {
    let stack = new Stack()
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    let prnt = ''
    while (!stack.isEmpty()) {
        prnt += stack.pop()
    }
    console.log(prnt);

}

reverseString("im_complan_boy")