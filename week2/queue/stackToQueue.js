class Stack {
    constructor() {
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length == 0
    }
    print(){
        if (this.isEmpty()) {
            console.log("this stack is empty.....");
        }
        let prnt = ''
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]){
                prnt += this.items[i] + " "
            } 
        }
        console.log(prnt);
    }

}


class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        this.items.length == 0
    }
    print(){
        if (this.isEmpty()) {
            console.log("this queue is empty.....");
        }
        let prnt = ''
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]){
                prnt += this.items[i] + " "
            } 
        }
        console.log(prnt);
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.print()

const queue = new Queue()

while (!stack.isEmpty()) {
    queue.enqueue(stack.pop())
}


queue.print()