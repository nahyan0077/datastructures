// class Stack {
//     constructor() {
//         this.queue1 = []
//         this.queue2 = []
//     }
//     push(element){
//         this.queue1.push(element)
//     }
//     pop(){
//         while (this.queue1.length > 1) {
//             this.queue2.push(this.queue1.shift())
//         }
//         const temp= this.queue1;
//         this.queue1 = this.queue2;
//         this.queue2 = tempQueue;
//         return this.queue2.shift()
//     }
// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack.queue1);
// console.log(stack.queue2);
// console.log(stack.pop())



// class Stack {
//     constructor() {
//         this.queue1 = []
//         this.queue2 = []
//     }
//     push(ele){
//         this.queue1.push(ele)
//     }
//     pop(){
//         if(this.queue2.length==0){
//             while (this.queue1.length>1) {
//                 this.queue2.push(this.queue1.shift())
//             }
//             let temp = this.queue1
//             this.queue1 = this.queue2
//             this.queue2 = temp
//         }
//         return this.queue2.shift()
//     }
// }

// const stk = new Stack()

// stk.push(1)
// stk.push(2)
// stk.push(3)
// stk.push(4)
// stk.push(5)
// stk.push(6)

// console.log(stk.pop())
// console.log(stk.pop())
// console.log(stk);


class Stack {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(val){
        this.queue1.push(val)
    }
    pop(){
        if(this.queue2.length==0){
            while (this.queue1.length>1) {
                this.queue2.push(this.queue1.shift())
            }
            let rmv = this.queue1.shift()
            let temp = this.queue1
            this.queue1 = this.queue2
            this.queue2 = temp
            return rmv
        }
    }
}

const stk = new Stack()

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.push(6)

console.log(stk.pop())
console.log(stk.pop())
console.log(stk);