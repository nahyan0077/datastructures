class Stack {
    constructor() {
        this.stack = []
    }
    push(val){
        this.stack.push(val)
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length - 1] 
    }
    nthStack(n){
        let temp = []
        for(let i=0;i<n;i++){
            temp.push(this.stack.pop())
        }
        let nth = this.stack.pop()
        while (temp.length > 0) {
            this.stack.push(temp.pop())
        }
        return nth
    }
    
}

const stk = new Stack()

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.push(6)
stk.push(7)



stk.pop()

console.log(stk.peek());
console.log(stk.nthStack(2));
console.log(stk.stack);