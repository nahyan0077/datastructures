class minHeap {
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
        for(let i=Math.floor(n/2); i >= 0; i--){
            this.heapifyDown(i,n)
        }
    }
    heapifyDown(index,size){
        let smallest = index
        let leftIndex = 2 * index + 1
        let rightIndex = 2 * index + 2
        if (leftIndex < size && this.heap[leftIndex] < this.heap[smallest] ) {
            smallest = leftIndex
        }
        if (rightIndex < size && this.heap[rightIndex] < this.heap[smallest]) {
            smallest = rightIndex
        }
        if (index != smallest) {
            this.swap(smallest,index)
            this.heapifyDown(smallest,size)
        }
    }
    heapSort(){
        let n = this.heap.length
        for(let i = n-1; i > 0; i--){
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }
}

const hp = new minHeap()
let arr = [34,78,25,68,31,47,97]
hp.buildHeap(arr)

console.log(hp);

hp.heapSort()

console.log(hp);