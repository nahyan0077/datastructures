// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     removeFromFirst(){
//         if (this.isEmpty()) {
//             return null
//         }
//         let val = this.head.value
//         this.head = this.head.next
//         this.size--
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null
//         }
//         let val = this.tail.value
//         if(this.size==1){
//             this.head = null
//             this.tail = null
//         }else{
//             let prev = this.head
//             while (prev.next != this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//             this.size--
//             return val
//         }
//     }

//     insert(value, index){
//         if(index<0 || index>this.size){
//             return null
//         }else if(index==0){
//             this.prepend(value)
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0; i<index-1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("this list is empty");
//         }else{
//             let curr = this.head
//             let elem = ''
//             while (curr) {
//                 elem += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(elem);
//         }
//     }
// }

// const list = new linkedList()

// // list.print()

// // list.append(1)
// // list.append(2)
// // list.append(3)
// // list.print()


// // list.prepend(1)
// // list.prepend(2)
// // list.prepend(3)
// // list.print()

// // list.removeFromFirst()
// // list.print()

// // list.removeFromEnd()
// // list.print()


// list.append(0)
// list.append(1)
// list.append(2)
// list.append(4)
// list.append(5)

// list.print()


// list.insert(33,3)
// list.print()




class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null    
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null
        } else if (this.size == 1 && index == 0) {
            this.head = null
            this.tail = null
        } else {
            let curr = this.head
            if (index == 0) {
                this.head = curr.next
                this.head.prev = null
            }
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            let rmvNode = curr.next
            curr.next = rmvNode.next
            rmvNode.next.prev = curr
        }
        this.size--
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (this.head.value == value) {
            this.head = this.head.next
            this.head.prev = null
            this.size--
            return value
        } else if (this.tail.value == value) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
        } else {
            let curr = this.head
            while (curr.next && curr.next.value != value) {
                curr = curr.next
            }
            let remNode = curr.next
            curr.next = remNode.next
            remNode.next.prev = curr
            this.size--
            return value
        }
    }

    search(val) {
        if (this.isEmpty()) {
            return -1
        } else {
            let i = 0
            let curr = this.head
            while (curr) {
                if (curr.value == val) {
                    return i
                }
                i++
                curr = curr.next
            }
            return -1
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null
        } else if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.prev = curr
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    reverse() {
        let curr = this.head
        let prev = null
        let next = null
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

    print() {
        if (this.isEmpty()) {
            console.log("this list is empty....");
        } else {
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

const list = new doublyLinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)

list.print()


list.append(4)
list.append(5)
list.append(6)

list.print()

list.removeFrom(0)

list.print()

list.removeValue(6)
list.print()

console.log(list.search(1))
console.log(list.search(2))

list.insert(23, 4)
list.print()

list.reverse()
list.print()