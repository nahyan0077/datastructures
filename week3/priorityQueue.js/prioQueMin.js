class prioQue {
    constructor() {
        this.heap = []
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    enqueue(value,priority){
        this.heap.push({value,priority})
        this.heapifyUp(this.heap.length - 1)
    }
    dequeue(){
        if (!this.heap.length) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return rmv.value
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while (parentIndex > 0 && this.heap[parentIndex].priority > this.heap[index].priority) {
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(index,size){
        let smallest = index
        let left =  2 * index + 1
        let right =  2 * index + 2
        if (left < size && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left
        }
        if (right < size && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right
        }
        if (index != smallest) {
            this.swap(smallest,index)
            this.heapifyDown(smallest,size)
        }
    }

}

const prque = new prioQue()

prque.enqueue(17,1)
prque.enqueue(22,5)
prque.enqueue(34,4)
prque.enqueue(5,3)
prque.enqueue(65,2)

// console.log(prque.dequeue());

console.log(prque);