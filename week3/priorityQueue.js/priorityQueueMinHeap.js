class maxPriorityQueue {
    constructor() {
        this.heap = []
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor(n/2);i>=0;i--){
            this.heapifyDown(i,n)
        }
    }
    enqueue(value,priority){
        this.heap.push({value,priority})
        this.heapifyUp()
    }
    dequeue(){
        if (this.heap.length == 0) {
            return null
        }
        let remove = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return remove.value
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while (index > 0) {
            const parentIndex = Math.floor((index - 1)/2)
            if(this.heap[parentIndex].priority < this.heap[index].priority ){
                this.swap(index,parentIndex)
                index = parentIndex
            }else{
                break
            }
        }
    }
    heapifyDown(index,size){
        let largest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left].priority > this.heap[largest].priority ) {
            largest = left
        }
        if (right < size && this.heap[right].priority > this.heap[largest].priority ) {
            largest = right
        }
        if (largest != index) {
            this.swap(largest,index)
            this.heapifyDown(largest,size)
        }
        index = largest
    }
}

const proQue = new maxPriorityQueue()

proQue.enqueue(32,3)
proQue.enqueue(53,1)
proQue.enqueue(98,4)
proQue.enqueue(3,2)
proQue.enqueue(567,0)
proQue.enqueue(17,5)

console.log(proQue);

console.log(proQue.dequeue())
console.log(proQue.dequeue())
console.log(proQue.dequeue())
console.log(proQue);


//here we can return the element with lowest priority from the heap