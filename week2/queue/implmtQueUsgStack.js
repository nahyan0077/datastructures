// class Queue {
//     constructor() {
//         this.stack1 = []
//         this.stack2 = []
//     }
//     enqueue(element){
//         this.stack1.push(element)
//     }
//     dequeue(){
//         if (this.stack2.length==0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
// }

// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)

// console.log(queue.dequeue())

// console.log(queue.stack2);


// class Queue {
//     constructor() {
//         this.stack1 = []
//         this.stack2 = []
//     }
//     isEmpty(){
//         return this.stack1.length == 0
//     }
//     enqueue(val){
//         this.stack1.push(val)
//     }
//     dequeue(){
//         if (this.stack2.length == 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//             let temp = this.stack1
//             this.stack1 = this.stack2
//             this.stack2 = temp
//         }
//         return this.stack1.pop()
//     }
// }

// const que = new Queue()

// que.enqueue(1)
// que.enqueue(2)
// que.enqueue(3)
// que.enqueue(4)

// que.dequeue()

// console.log(que);


class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if (this.stack2.length==0) {
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop())
            }
            let rmv = this.stack2.pop()
            while (this.stack2.length) {
                this.stack1.push(this.stack2.pop())
            }
        }
    }
}

const que = new Queue()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)

que.dequeue()

console.log(que);