// class Stack {
//     constructor() {
//         this.queue1 = []
//         this.queue2 = []
//     }
//     push(val){
//         this.queue1.push(val)
//     }
//     pop(){
//         if(this.queue2.length == 0){
//             while(this.queue1.length > 1){
//                 this.queue2.push(this.queue1.shift())
//             }
//             var rmv = this.queue1.shift()
//             while(this.queue2.length){
//                 this.queue1.push(this.queue2.shift())
//             }
//         }
//         return rmv
//     }
// }

// const stk = new Stack()

// stk.push(1)
// stk.push(2)
// stk.push(3)
// stk.push(4)
// stk.push(5)

// console.log(stk.pop())

// console.log(stk);


class Stack {
    constructor() {
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    rmvMidEle(){
        let temp = []
        let mid = Math.floor(this.stack.length/2)
        for(let i=0;i<mid;i++){
            temp.push(this.stack.pop())
        }
        let rmvEle = this.stack.pop()
        while (temp.length) {
            this.stack.push(temp.pop())
        }
        return rmvEle
    }
}

const stk = new Stack()

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)

stk.rmvMidEle()

console.log(stk);
