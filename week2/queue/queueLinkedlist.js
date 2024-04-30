class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class QueueLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    enqueue(element){
        let node = new Node(element)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    dequeue(){
        let rmvQue = this.head
        this.head = this.head.next
        this.size--
        return rmvQue
    }
    print(){
        if (this.isEmpty()) {
            console.log("this queue is empty....");
        }
        let curr = this.head
        let prnt = ""
        while (curr) {
            prnt += curr.value + " "
            curr = curr.next
        }
        console.log(prnt);
    }

}

const queue = new QueueLinkedList()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

queue.dequeue()
queue.print()