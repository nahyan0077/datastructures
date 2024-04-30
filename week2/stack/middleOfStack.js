class Stack {
    constructor() {
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    // pop(){
    //     return this.stack.pop()
    // }
    deleteMiddle(){
        let temp = []
        let midIndex = Math.floor(this.stack.length/2)
        for(let i=0;i<midIndex;i++){
            temp.push(this.stack.pop())
        }
        let x = this.stack.pop()

        while (temp.length > 0) {
            this.stack.push(temp.pop())
        }
        return x
    }
}

const stack = new Stack()

stack.push(23)
stack.push(6)
stack.push(678)
stack.push(8)
stack.push(88)
stack.push(69)
stack.push(45)

console.log(stack.stack);

console.log(stack.deleteMiddle())
console.log(stack.stack);
