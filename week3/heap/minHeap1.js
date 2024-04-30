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
        for(let i = Math.floor(n/2); i >= 0 ; i--){
            this.heapifyDown(i,n)
        }
    }
    addNewElement(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while (parentIndex > 0 && this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = Math.floor((index - 1)/2)
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
        if (index != smallest) {
            this.swap(smallest,index)
            this.heapifyDown(smallest,size)
        }
    }
}


const mhp = new minHeap()

let arr = [34,78,25,68,31,47,97]
mhp.buildHeap(arr)

mhp.addNewElement(88)

console.log(mhp);