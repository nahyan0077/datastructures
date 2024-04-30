class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class linkedList {
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
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    insert(value,index){
        const node = new Node(value)
        if(index<0 || index>this.size){
            return null
        }else if(index==0){
            return this.prepend(value)
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
    removeNthNode(n){
        if (n<0 || n>=this.size) {
            return null
        }else if(n==0){
            this.head = this.head.next
            this.size--
        }else{
            let curr = this.head
            for(let i=0;i<n-1;i++){
                curr = curr.next
            }
            let rmvNode = curr.next
            curr.next = rmvNode.next
            this.size--
        }
    }
    removeValue(value){
        if (this.isEmpty()) {
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next
            this.size--
        }else{
            let curr = this.head
            while (curr.next && curr.next.value != value) {
                curr = curr.next
            }
            let rmvNode = curr.next
            curr.next = rmvNode.next
            this.size--
            return value
        }
    }
    search(value){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let i = 0
        while (curr) {
            if(curr.value == value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    reverse(){
        if (this.isEmpty()) {
            return null
        }else{
            let curr = this.head
            let next = null
            let prev = null
            while (curr) {
                next = curr.next
                curr.next = prev

                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    checkCircular(){
        if (this.isEmpty()) {
            return null
        }else{
            let slow = this.head
            let fast = this.head
            while (fast && fast.next) {
                slow = slow.next
                fast = fast.next.next

                if(slow == fast){
                    return true
                }
            }
        }
        return false
    }
    midNode(){
        if (this.isEmpty()) {
            return null
        }else{
            let slow = this.head
            let fast = this.head
            while (fast && fast.next) {
                slow = slow.next
                fast = fast.next.next
            }
            return slow.value
        }
    }
    removeDuplicate(){
        if (this.isEmpty()) {
            return null
        }else{
            let curr = this.head
            while (curr && curr.next) {
                if (curr.value == curr.next.value) {
                    let rmvNode = curr.next
                    curr.next = rmvNode.next
                    this.size--
                }else{
                    curr = curr.next
                }
            }
        }
    }
    insetInSort(value){
        if (this.isEmpty()) {
            return null
        }
        const node = new Node(value)
        if (this.head.value > value) {
            node.next = this.head
            this.head = node
            this.size++
        }else{
            let curr = this.head
            while (curr.next.value < value) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }
    print(){
        if (this.isEmpty()) {
            console.log("this list is empty.........");
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

const list = new linkedList()

list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.print()

list.prepend(4)
list.prepend(3)
list.prepend(2)
list.prepend(1)
list.print()

// list.insert(33,5)
// list.print()

// list.removeNthNode(9)
list.print()

// list.removeValue(1)
// list.print()

console.log(list.search(5));

console.log(list.checkCircular());

console.log(list.midNode());

// list.removeDuplicate()
// list.print()


list.insetInSort(2)
list.print()