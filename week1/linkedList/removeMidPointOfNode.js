class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeMidNode(){
        if (this.isEmpty()) {
            return null
        }else{
            let slow = this.head
            let fast = this.head
            let prev = null
            while (fast && fast.next) {
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }
            prev.next = slow.next
            this.size--
        }
    }

    print(){
        if (this.isEmpty()) {
            console.log("empty");
        }else{
            let curr = this.head
            let prnt = ""
            while (curr) {
                prnt += `${curr.value} `
                curr = curr.next
            }
            console.log(prnt);
        }
    }
}

const list = new LinkedList()


list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()

list.removeMidNode()
list.print()