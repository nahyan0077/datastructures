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

    getSize(){
        return this.size
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

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
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

    

    insert(value, index){
        if(index<0 || index>this.size){
            return
        }else if(index==0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i < index-1; i++){
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
            this.size--
        }else{
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            let remvNode = prev.next
            prev.next = remvNode.next
            this.size--
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if( this.head.value === value ){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if(prev.next){
                let removeVal = prev.next
                prev.next = removeVal.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i = 0
            let curr = this.head
            while (curr) {
                if(curr.value == value){
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
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
            slow = slow.next
            fast = fast.next.next
            if(slow == fast){
                return true
            }
        }
        return false
    }


    print(){
        if(this.isEmpty()){
            console.log("List is empty");
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

const List = new LinkedList()

// console.log("Is the list is empty?  ",List.isEmpty());
// console.log("Size of the linked list  ",List.getSize());
// List.print()

// List.prepend(1)
// List.print()
// console.log("Size of the linked list  ",List.getSize());

// List.prepend(2)
// List.prepend(3)
// List.print()
// console.log("Size of the linked list  ",List.getSize());    




// console.log("Is the list is empty?  ",List.isEmpty());
// console.log("Size of the linked list  ",List.getSize());
// List.print()

// List.append(1)
// List.print()
// console.log("Size of the linked list  ",List.getSize());

// List.append(2)
// List.append(3)
// List.print()
// console.log("Size of the linked list  ",List.getSize());    



// List.append(1)
// List.append(2)
// List.append(3)
// List.append(4)
// List.append(5)
// List.append(6)
// console.log("Is the list is empty?  ",List.isEmpty());
// console.log("Size of the linked list  ",List.getSize());
// List.insert(222,3)
// List.insert(111,0)
// List.insert(111,9)

// List.print()




// List.append(1)
// List.append(2)
// List.append(3)
// List.append(4)
// List.append(5)
// List.append(6)

// List.removeValue(3)
// List.print()

// List.removeValue(4)
// List.print()

// console.log(List.removeValue(10))
// List.print()



// List.append(1)
// List.append(2)
// List.append(3)
// List.append(4)
// List.append(5)
// List.append(6)

// List.removeFrom(2)
// List.print()


// List.append(1)
// List.append(2)
// List.append(3)
// List.append(4)
// List.append(5)
// List.append(6)

// console.log(List.search(4))
// console.log(List.search(14))
// console.log(List.search(-14))




// List.append(1)
// List.append(2)
// List.append(3)
// List.append(4)
// List.append(5)
List.append(6)
List.append(3)
List.append(7)
List.append(8)

List.reverse()  
List.print()
List.removeFrom(2)
List.print()
console.log(List.checkCircular())