// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {  
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is empty");
//         }else{
//             let curr = this.head

//             while (curr) {
//                 console.log(curr.value);
//                 curr = curr.next
//             }
//         }
//     }

// }

// const list = new LinkedList()

// // list.print()

// // list.prepend(100)

// // list.prepend(20)
// // list.prepend(3)
// // list.prepend(5)

// // list.print()


// list.print()
// console.log("---------------");

// list.append(100)

// list.print()
// console.log("---------------");

// list.append(20)
// list.append(3)
// list.append(5)
// list.append(25)



// list.print()


class Node{
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

    append (value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    preppend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(value, index){
        if(index<0 || index>this.size){
            return 
        }else if(index==0){
            this.preppend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0 || index>this.size){
            return null
        }else if(index==0){
            this.head = this.head.next
        }else{
            let prev = this.head
            for (let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            let remvElmnt = prev.next
            prev.next = remvElmnt.next
            this.size--
        }
    }

    print(){
        if (this.isEmpty()) {
            console.log("This list is empty...");
        }else{
            let curr = this.head
            while (curr) {
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}


const list = new linkedList()

// list.print()
// console.log("-----------");
// list.append(100)
// list.print()
// console.log("-----------");
// list.append(200)
// list.print()
// console.log("-----------");

// list.preppend(1)
// list.preppend(2)
// list.preppend(3)

// list.print()


// list.append(1)
// list.append(2)
// list.append(3)
// list.append(5)
// list.insert(4,3)

// list.print()




list.append(1)
list.append(2)
list.append(3)
list.append(5)

console.log(list.removeFrom(-1))
list.print()