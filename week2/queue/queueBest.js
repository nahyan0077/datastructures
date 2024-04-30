class Queue {
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }
    isEmpty(){
        return this.rear - this.front == 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        let rmvItem = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return rmvItem
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items);
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
console.log(queue.peek())
console.log(queue.size())
queue.print()