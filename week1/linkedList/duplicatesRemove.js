class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class singlyLInkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty (){
        return this.size == 0
    }
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
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
    removeDups(){
        if (this.isEmpty()) {
            return null
        }else{
            let curr = this.head
            while (curr) {
                if (curr.next && curr.value == curr.next.value) {
                    curr.next = curr.next.next
                    this.size--
                }else{
                    curr = curr.next
                }
            }
        }
    }
    insert(value, index) {
        const node = new Node(value)
        if(index<0 || index>this.size){
            return null
        }
        if (this.isEmpty()) {
            this.head = node
        }
        if (index==0) {
            this.prepend(value)
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }
    removeNode(n){
        if(n<0 || n>this.size){
            return null
        }
        if (n==0) {
            this.head = this.head.next
        }else{
            let curr = this.head
            for (let i = 0; i < n-1; i++) {
                curr = curr.next
            }
            let remvNode = curr.next
            curr.next = remvNode.next
        }
        this.size--
    }
    removeValue(value){
        if (this.isEmpty()) {
            return null
        }else{
            let curr =  this.head
            while(curr.next && curr.next.value != value){
                curr = curr.next
            }
            let remvNode = curr.next
            curr.next = remvNode.next
        }
        this.size--
    }
    print(){
        if (this.isEmpty()) {
            console.log("list is empty");
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

const list = new singlyLInkedList()

list.append(4)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.print()

list.prepend(4)
list.prepend(3)
list.prepend(2)
list.prepend(2)
list.prepend(1)
list.print()

list.removeDups()
list.print()

list.insert(555,4)
list.print()

list.removeNode(5)
list.print()

list.removeValue(4)
list.print()