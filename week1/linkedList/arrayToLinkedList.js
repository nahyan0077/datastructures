class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class linkedList {
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

    removeFrom(index){
        if(index < 0 ||index > this.size){
            return null
        }
        if(index == 0 && this.size == 1){
            this.head = null
            this.tail = null
        }else{
            if(index == 0){
                this.head = this.head.next
                this.head.prev = null
            }else{
                let curr = this.head
                for(let i = 0; i < index - 1; i++){
                    curr = curr.next
                }
                let rmvNode = curr.next
                curr.next = rmvNode.next
                rmvNode.next.prev = curr
            }
        }
        this.size++
    }

    removeValue(value){
        if (this.isEmpty()) {
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return value
        }else if(this.tail.value == value ){
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
            return value
        }else{
            let curr = this.head
            while (curr.next && curr.next.value != value) {
                curr = curr.next
            }
            let rmvNode = curr.next
            curr.next =  rmvNode.next
            rmvNode.next.prev = curr
            this.size--
            return value
        }
    }

    reverse(){
        let curr = this.head
        let next = null
        let prev = null
        while (curr) {
            next = curr.next

            curr.next = prev
            curr.prev = next

            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }

    middleNode(){
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    print(){
        if(this.isEmpty()){
            console.log("this list is empty...");
        }else{
            let curr = this.head
            let lnkLst = ''
            while (curr) {
                lnkLst += `${curr.value} `
                curr = curr.next
            }
            console.log(lnkLst);
        }
    }
}

const list = new linkedList()

// list.print()

// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.print()

let arr = [1,2,3,4,5,7,7,5,3,2,5,6,3]

for (const x of arr) {
    list.append(x)
}

list.removeFrom(1)
list.removeFrom(2)
list.removeValue(7)

list.reverse()

console.log(list.middleNode());

list.print()