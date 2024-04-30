class Stack {
    constructor() {
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        return this.stack.pop()
    }
    isEmpty(){
        return this.stack.length == 0
    }
    display(){
        if (this.isEmpty()) {
            console.log("stack is empty......");
        }
        let prnt = ''
        for(let i = 0;i < this.stack.length; i++){
            prnt += this.stack[i] + " "
        }
        console.log(prnt);
    }
    midElemnt(){
        let mid = Math.floor(this.stack.length/2)
        let temp = []
        for(let i=0;i<mid;i++){
            temp.push(this.stack.pop())
        }
        let rmvElement = this.stack.pop()
        while (temp.length) {
            this.stack.push(temp.pop())
        }
        return rmvElement
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

stack.pop()
console.log(stack.midElemnt());
stack.display()