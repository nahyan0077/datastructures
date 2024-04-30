class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.size = 0     
    }

    isEmpty(){
        return this.size === 0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insertInSorted(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        if(this.head.value > value){
            node.next = this.head
            this.head = node
        }else{
            let curr = this.head
            while (curr.next && curr.next.value < value) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    print(){
        if (this.isEmpty()) {
            console.log("empty");
        }else{
            let curr = this.head
            let prnt = ''
            while (curr) {
                prnt += `${curr.value} `
                curr = curr.next
            }
            console.log(prnt);
        }
    }

}

const list = new LinkedList()


list.append(3)
list.append(5)
list.append(5)

list.prepend(3)
list.prepend(2)
list.prepend(1)

list.insertInSorted(0)
list.print()

