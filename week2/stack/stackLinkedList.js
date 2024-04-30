class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    push(data){
        let node = new Node(data)
        node.next = this.head
        this.head = node
        this.size++
    }
    pop(){
        let rmvNode = this.head
        this.head = rmvNode.next
        this.size--
    }
    peek(){
        return this.head.data
    }
    print(){
        if (this.isEmpty()) {
            console.log("this is empty.........");
        }
        let curr = this.head
        let prnt = ''
        while (curr) {
            prnt += curr.data + " "
            curr = curr.next
        }
        console.log(prnt);
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.print()

stack.pop()
stack.print()

console.log(stack.peek());