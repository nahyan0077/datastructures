class maxHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2 )
    }
    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    getLeftChildIndex(parentIndex){
        return (parentIndex * 2) + 1
    }
    getLeftChild(parentIndex){
        return this.heap[this.getLeftChildIndex(parentIndex)]
    }
    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.heap.length
    }

    getRightChildIndex(parentIndex){
        return (parentIndex * 2) + 2
    }
    getRightChild(parentIndex){
        return this.heap[this.getRightChildIndex(parentIndex)]
    }
    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.heap.length;
    }

    swap(index1, index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    peek(){
        if(this.heap.length == 0){
            return null
        }
        return this.heap[0]
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while (this.hasParent(index) && this.getParent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }
    addNewElement(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    remove(){
        if(this.heap.length == 0){
            return null
        }
        const item = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapifyDown()
        return item
    }
    heapifyDown(){
        let index = 0
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index)
            if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index)
            }
            if(this.heap[index] > this.heap[largerChildIndex]){
                break
            }else{
                this.swap(index, largerChildIndex)
            }
            index = largerChildIndex
        }
    }
    
}

const heap = new maxHeap()

// heap.addNewElement(23)
// heap.addNewElement(45)
// heap.addNewElement(74)
// heap.addNewElement(2)
// heap.addNewElement(67)
// heap.addNewElement(6)

let arr = [35,56,12,43,12,67,23,76]

for(let i=0;i<arr.length;i++){
    heap.addNewElement(arr[i])
}


console.log(heap.getLeftChild(4));
console.log(heap.getRightChild(4));

console.log(heap.remove())

// console.log(heap.peek());
console.log(heap);

