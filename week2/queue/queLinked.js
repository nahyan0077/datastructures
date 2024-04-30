class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    enqueue(val){
        let node = new Node(val)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    dequeue(){
        let rmvNode = this.head
        this.head = this.head.next
        this.size--
        return rmvNode
    }
    print(){
        if (this.isEmpty()) {
            console.log("This queue is empty...");
        }
        let curr = this.head
        let prnt = ''
        while (curr) {
            prnt += curr.value + " "
            curr = curr.next
        }
        console.log(prnt);
    }
    rmvMidEle(){
        let curr = null
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            curr = slow
            slow = slow.next
            fast = fast.next.next
        }
        let rmvNode = slow
        curr.next = slow.next
        this.size--
        return rmvNode.value
    }
}

const que = new Queue()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)

console.log(que.rmvMidEle())
que.print()