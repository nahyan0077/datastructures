class maxHeap {
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
    addNewElement(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index - 1)/2)
        while (parentIndex > 0 && this.heap[parentIndex] < this.heap[index]) {
            this.swap(parentIndex,index)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(index,size){
        let largest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if ( left < size && this.heap[left] > this.heap[largest] ) {
            largest = left
        }
        if ( right < size && this.heap[right] > this.heap[largest]) {
            largest = right
        }
        if (index != largest) {
            this.swap(largest,index)
            this.heapifyDown(largest,size)
        }
    }
}

const mhp = new maxHeap()

let arr = [34,78,25,68,31,47,97]

mhp.buildHeap(arr)
mhp.addNewElement(80)

console.log(mhp);