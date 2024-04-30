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
//     }
//     pop(){
//         if (this.isEmpty()) {
//             return null
//         }
//         let rmvElement = this.items[this.size-1]
//         this.size--
//         return rmvElement
//     }
//     reverse(){
//         if (this.isEmpty()) {
//             return
//         }
//         const newStack = new Stack()
//         while (!this.isEmpty()) {
//             newStack.push(this.pop())
//         }
//         this.items = newStack.items
//         this.size = newStack.size
//     }
//     print(){
//         if (this.isEmpty()) {
//             console.log("stack is empty.........");
//         }
//         let prnt = ''
//         for(let i=0;i<this.size;i++){
//             prnt += this.items[i] + " "
//         }
//         console.log(prnt);
//     }
// }

// const stack = new Stack()

// stack.print()

// stack.push(2)
// stack.push(23)
// stack.push(236)
// stack.push(1)
// stack.push(36)
// stack.push(6)

// stack.print()

// stack.pop()
// stack.print()

// stack.reverse()
// stack.print()



class Stack {
    constructor() {
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    pop(){
        return this.stack.pop()
    }
    reverse(){
        let temp = []
        while (this.stack.length) {
            temp.push(this.stack.pop())
        }
        while (temp.length) {
            this.stack.push(temp.shift())
        }
    }
    rmVal(val){
        let temp = []
        let i = this.stack.length
        while (this.stack[i-1]!=val) {
            temp.push(this.stack.pop())
            i--
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
stk.push(6)
console.log(stk);
console.log(stk.rmVal(4))
console.log(stk);
console.log(stk.pop())
stk.reverse()
console.log(stk);
