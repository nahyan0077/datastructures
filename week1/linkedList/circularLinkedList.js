class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class circularLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            node.next = this.head
        }else{
            let curr = this.head
            while (curr.next != this.head) {
                curr = curr.next
            }
            curr.next = node
            node.next = this.head
        }
        this.size++
    }

    checkCircular(){
        if (this.isEmpty()) {
            return null
        }
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
            if(slow == fast){
                return true
            }
        }
        return false
    }

    print(){
        if (this.isEmpty()) {
            console.log("list is empty.......");
        }else{
            let curr = this.head
            let prnt = ''
            do {
                prnt += `${curr.value} `
                curr = curr.next
            } while ((curr != this.head));

            console.log(prnt);
        }
    }
}

const list = new circularLinkedList()

list.print()

list.append(1)
list.append(2)
// list.append(3)
// list.append(4)
list.print()

console.log(list.checkCircular());