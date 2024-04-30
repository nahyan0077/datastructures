class queue {
    constructor() {
        this.item = {}
        this.front = 0
        this.rear = 0
    }
    isEmpty(){
        return this.rear - this.front == 0
    }
    enqueue(element){
        this.item[this.rear] = element
        this.rear++
    }
    dequeue(){
        let rmvElement = this.item[this.front]
        delete this.item[this.front]
        this.front++
        return rmvElement
    }
    peek(){
        return this.item[this.front]
    }
    print(){
        if (this.isEmpty()) {
            return null
        }
        console.log(this.item);
    }
}

const que = new queue()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)

que.dequeue()

que.print()