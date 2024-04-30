class Node {
    constructor(value) {
        this.value = value
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
    push(val){
        let node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    pop(){
        if (this.isEmpty()) {
            return null
        }
        this.head = this.head.next
        this.size--
    }
    nthNode(n){
        let curr = this.head
        for(let i=0;i<n-1;i++){               
            curr = curr.next
        }
        let rmv = curr.next
        curr.next = rmv.next
        this.size--
        return rmv.value
    }
    print(){
        let curr = this.head
        let prnt = ''
        while (curr) {
            prnt += curr.value + " "
            curr = curr.next
        }
        console.log(prnt);
    }
}

const stk = new Stack()

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.push(6)

stk.pop()

console.log(stk.nthNode(3))

stk.print()

