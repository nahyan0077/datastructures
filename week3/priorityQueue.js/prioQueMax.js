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
        if(this.heap.length == null){
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
        for(let i = Math.floor(n/2);i>=0;i--){
            this.heapifyDown(i,n)
        }
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while (parentIndex > 0 && this.heap[parentIndex].priority > this.heap[index].priority  ) {
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(index,size){
        let largest = index
        let left =  2 * index + 1
        let right =  2 * index + 2
        if (left < size && this.heap[left].priority > this.heap[largest].priority) {
            largest = left
        }
        if (right < size && this.heap[right].priority > this.heap[largest].priority) {
            largest = right
        }
        if (largest != index) {
            this.swap(largest,index)
            this.heapifyDown(largest,size)
        }
    }
    
}

const hp = new prioQue()

const arr = [{ value: 35, priority: 5 }, { value: 56, priority: 7 }, { value: 12, priority: 1 }, { value: 43, priority: 3 }, { value: 12, priority: 4 }, { value: 67, priority: 0 }, { value: 23, priority: 2 }, { value: 76, priority: 6 }];

hp.buildHeap(arr)

console.log(hp.dequeue());
console.log(hp.dequeue());
console.log(hp.dequeue());

console.log(hp);