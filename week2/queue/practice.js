class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        return this.queue.shift()
    }
    isEmpty(){
        return this.queue.length == 0
    }
    display(){
        if (this.isEmpty()) {
            console.log("this queue is empty.....");
        }
        let prnt = ''
        for(let i=0;i<this.queue.length;i++){
            prnt += this.queue[i] + " "
        }
        console.log(prnt);
    }
    midElement(){
        let mid = Math.floor(this.queue.length/2)
        let temp = []
        for(let i=0;i<mid;i++){
            temp.push(this.queue.shift())
        }
        let rmvEle = this.queue.shift()
        while (this.queue.length) {
            temp.push(this.queue.shift())
        }
        let tempQueue = this.queue;
        this.queue = temp;
        temp = tempQueue;
        return rmvEle
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

queue.dequeue()

console.log(queue.midElement());

queue.display()