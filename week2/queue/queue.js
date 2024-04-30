class Queue {
    constructor() {
        this.items = []
    }
    isEmpty(){
        return this.items.length == 0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    remVal(val){
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]==val){
                this.items.splice(i,1)
                return val
            }
        }
        return null
    }
    print(){
        if (this.isEmpty()) {
            console.log("this queue is empty....");
        }
        console.log(this.items.toString());
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

queue.print()

queue.remVal(4)
queue.print()