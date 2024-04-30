class PrioQueue {
    constructor() {
        this.heap = []
    }
    enqueue(value,priority){
        this.heap.push({value,priority})
        this.heapifyUp(this.heap.length - 1)
    }
    dequeue(){
        if (this.heap.length == 0) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return rmv.value
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while (parentIndex >= 0 && this.heap[parentIndex].priority < this.heap[index].priority) {
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(index,size){
        let largest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left].priority > this.heap[largest].priority) {
            largest = left
        }
        if (right < size && this.heap[right].priority > this.heap[largest].priority) {
            largest = right
        }
        if (index != largest) {
            this.swap(largest,index)
            this.heapifyDown(largest,size)
        }
    }
}

const pq = new PrioQueue()

pq.enqueue(234,5)
pq.enqueue(534,2)
pq.enqueue(856,4)
pq.enqueue(523,1)
pq.enqueue(934,3)
pq.enqueue(173,6)

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());

console.log(pq);