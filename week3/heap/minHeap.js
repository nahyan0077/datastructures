class minHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }
    getParent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)]
    }
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0
    }

    getLeftChildIndex(parentIndex) {
        return (parentIndex * 2) + 1
    }
    getLeftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)]
    }
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heap.length
    }

    getRightChildIndex(parentIndex) {
        return (parentIndex * 2) + 2
    }
    getRightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)]
    }
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heap.length
    }

    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    peek() {
        if (this.heap.length == 0) {
            return null
        }
        return this.heap[0]
    }

    heapifyUp() {
        let index = this.heap.length - 1
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    addNewElement(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }




}

const heap = new minHeap()

heap.addNewElement(50)
heap.addNewElement(15)
heap.addNewElement(25)
heap.addNewElement(65)

console.log(heap);
console.log(heap.remove())
console.log(heap);

