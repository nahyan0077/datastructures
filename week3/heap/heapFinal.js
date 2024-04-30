class maxPrioHeap {
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
        if (this.heap.length === 0) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return rmv.value
    }
    buildHeap(arr){
        this.heap = arr
        let n = this.heap.length
        for(let i = Math.floor(n/2); i>=0 ;i--){
            this.heapifyDown(i,n)
        }
    }
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0 && this.heap[parentIndex].priority < this.heap[index].priority) {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
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
    heapSort(){
        let n = this.heap.length  ///checkkkkkkkkkkkkkkk
        for(let i = n-1; i>0; i--){
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }
    
}

const proQue = new maxPrioHeap()

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


