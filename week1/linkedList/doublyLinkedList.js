class Node{
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if (this.isEmpty()) {
            console.log("list is empty..");
        }else{
            let curr = this.head
            let prnt = ''
            while(curr){
                prnt += `${curr.value} `
                curr = curr.next
            }
            console.log(prnt);
        }
    }

    
}

const list = new doublyLinkedList()

list.print()

list.append(1)
list.append(2)
list.append(3)
list.print()

list.prepend(4)
list.prepend(5)
list.prepend(6)
list.print()