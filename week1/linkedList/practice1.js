class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doubly {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    getSize(){
        return this.size
    }
    preppend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }else{
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            node.prev = curr
            curr.next = node
            this.tail = node
        }
        this.size++
    }
    removeNthNode(n){
        if (n<0 || n>=this.size) {
            return null
        }
        if(n==0 && this.size == 1){
            this.head = null
            this.tail = null
            return null
        }
        if(n==0){
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return n
        }else{
            let curr = this.head
            for(let i=0;i<n-1;i++){
                curr = curr.next
            }
            let rmvNode = curr.next
            curr.next = rmvNode.next
            if(rmvNode.next){
                rmvNode.next.prev = curr
            }else{
                this.tail = curr
            }
            this.size--
            return n
        }
    }
    removeValue(value){
        if (this.isEmpty()) {
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }else{
                this.tail = this.head
            }
            this.size--
            return value
        }else{
            let curr = this.head
            while (curr.next && curr.next.value != value) {
                curr = curr.next
            }
            let rmvNode = curr.next
            curr.next = rmvNode.next
            if (rmvNode.next) {
                rmvNode.next.prev = curr
            }else{
                this.tail = curr
            }
            this.size--
            return value
        }
    }
    search(value){
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while(curr){
            if(curr.value == value){
                return value
            }
            curr = curr.next
        }
        return -1
    }
    insert(value,index){
        const node = new Node(value)
        if(index<0 || index>this.size){
            return null
        }
        if(index==0){
            return this.preppend(value)
        }
        let curr =  this.head
        for(let i=0;i<index-1;i++){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node
        if(node.next){
            node.next.prev = node
        }else{
            this.tail = node
        }
        this.size++
        return value
    }
    reverse(){
        let curr = this.head
        let prev = null
        let next = null
        this.tail = curr
        while(curr){
            next = curr.next
            curr.next = prev
            curr.prev = next

            prev = curr
            curr = next
        }
        this.head = prev
    }
    checkCircular(){
        if (this.isEmpty()) {
            return null
        }
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next

            if(slow == fast){
                return true
            }
        }
        return false
    }
    removeDuplicates(){
        if (this.isEmpty()) {
            return null
        }else{
            let curr = this.head
            while (curr && curr.next) {
                if(curr.value == curr.next.value){
                    let rmvNode = curr.next
                    curr.next = rmvNode.next
                    if (rmvNode.next) {
                        rmvNode.next.prev = curr
                    }else{
                        this.tail = curr
                    }
                    this.size--
                }else{
                    curr = curr.next
                }
            }
        }
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
    insertInSort(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
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
            if(node.next){
                node.next.prev = node
            }else{
                this.tail = node
            }
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log("the list is empty");
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

const list = new doubly()

list.print()

list.preppend(5)
list.preppend(4)
list.preppend(2)
list.preppend(2)
list.preppend(1)
list.preppend(0)
list.print()

list.append(6)
list.append(7)
list.append(7)
list.append(9)
list.append(10)
list.print()

// list.removeNthNode(10)
// list.removeValue(7)
// list.print()

// console.log(list.search(6));

// list.insert(55,11)
// list.print()

// list.reverse()
// list.print()

// console.log(list.checkCircular());

list.removeDuplicates()
list.print()

console.log(list.midNode())

list.insertInSort(3)
list.print()






///array to linked list

// function arrayToList(arr) {
//     for(let i=0;i<arr.length;i++){
//         list.append(arr[i])
//     }
//     list.print()
// }

// arrayToList([1,2,3,5,7,4,2,5,6,76])
