class Queue {
    constructor() {
        this.queue = {}
        this.front = 0
        this.rear = 0
    }
    isEmpty(){
        return this.rear - this.front == 0
    }
    enqueue(ele){
        this.queue[this.rear] = ele
        this.rear++
    }
    dequeue(){
        let rmvEle = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return rmvEle
    }
    peek(){
        return this.queue[this.front]
    }
    print(){
        if (this.isEmpty()) {
            console.log("this queue is empty....");
        }else{
            console.log(this.queue);
        }
    }
}

const que = new Queue()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)
que.enqueue(6)

que.dequeue()
que.dequeue()
console.log(que.peek())
que.print()