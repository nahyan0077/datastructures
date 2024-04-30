class Heap {
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
    addElement(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length)
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while (parentIndex > 0 && this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(index,size){
        let smallest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if (right < size && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }
        if (smallest != index) {
            this.swap(smallest,index)
            this.heapifyDown(smallest,size)
        }
    }
    remove(){
        if (this.heap.length == 0) {
            return null
        }
        let rmv = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return rmv
    }
    heapSort(){
        let n = this.heap.length
        for(let i = n-1; i>0;i--){
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }
}

const hp = new Heap()

let arr = [34,78,25,68,31,47,97]

hp.buildHeap(arr)

console.log(hp);


hp.remove()
hp.heapSort()

console.log(hp);