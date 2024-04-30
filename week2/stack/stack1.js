class Stack {
    constructor() {
        this.item = []
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
    }
    push(element){
        this.item[this.size] = element
        this.size++
        return this.size - 1
    }
    pop(){
        if (this.isEmpty()) {
            return null
        }
        let rmvElement = this.item[this.size - 1]
        this.size--
        return rmvElement
    }
    peek(){
        if (this.isEmpty()) {
            return null
        }
        return this.item[this.size - 1]
    }
    maxElement(){
        let max = 0
        for(let i=0;i<this.item.length;i++){
            if(this.item[i]>max){
                max = this.item[i]
            }
        }
        return max
    }
    minElement(){
        let min = this.item[0]
        for(let i=0;i<this.item.length;i++){
            if(this.item[i]<min){
                min = this.item[i]
            }
        }
        return min
    }
    print(){
        if (this.isEmpty()) {
            console.log("this stack is empty....");
        }
        let prnt = ""
        for(let i = 0; i < this.item.length; i++){
            prnt += `${this.item[i]} `
        }
        console.log(prnt);
    }
}

const stack = new Stack()


stack.push(1)
stack.push(2)
stack.push(3)

stack.print()

console.log(stack.peek());

console.log(stack.maxElement());
console.log(stack.minElement());