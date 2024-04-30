class Queue {
    constructor() {
        this.queue = []
    }
    isEmpty(){
        return this.queue.length == 0
    }
    enqueue(val){
        this.queue.push(val)
    }
    dequeue(){
        return this.queue.shift()
    }
    display(){
        if (this.isEmpty()) {
            console.log("this queue is empty...");
        }else{
            console.log(this.queue);
        }
        
    }
    removeMidQueue(){
        let mid = Math.floor((this.queue.length)/2)
        let temp = []
        for(let i=0;i<mid;i++){
            temp.push(this.queue.shift())
        }
        let midQue = this.queue.shift()
        while(this.queue.length){
            temp.push(this.queue.shift())
        }
        let tempque = temp
        temp = this.queue
        this.queue = tempque
        return midQue
    }
    

}

const que = new Queue()

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)

console.log(que.removeMidQueue())
// que.dequeue()
// que.dequeue()

que.display()