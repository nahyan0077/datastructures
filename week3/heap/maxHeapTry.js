class maxHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(childIndex){
        return Math.floor((childIndex - 1) / 2);
    }
    getParent(childIndex){
        return this.heap[this.getParentIndex(childIndex)];
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0;
    }

    getLeftChildIndex(parentIndex){
        return (parentIndex * 2) + 1;
    }
    getLeftChild(parentIndex){
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }
    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.heap.length;
    }

    getRightChildIndex(parentIndex){
        return (parentIndex * 2) + 2;
    }
    getRightChild(parentIndex){
        return this.heap[this.getRightChildIndex(parentIndex)];
    }
    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.heap.length;
    }

    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    peek(){
        if (this.heap.length == 0) {
            return null;
        }
        return this.heap[0];
    }

    heapifyUp(){
        let index = this.heap.length - 1
        while (this.hasParent(index) && this.getParent(index) < this.heap[index] )  {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(){
        let index = 0
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index)
            if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index) ) {
                largerChildIndex = this.getRightChildIndex(index)
            }
            if(this.heap[index] > this.heap[largerChildIndex]){
                break
            }else{
                this.swap(largerChildIndex, index)
            }
            index = largerChildIndex
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
}

const hp = new maxHeap()

hp.addNewElement(23)
hp.addNewElement(34)
hp.addNewElement(12)
hp.addNewElement(42)
hp.addNewElement(21)
hp.addNewElement(66)
hp.addNewElement(15)

console.log(hp.remove());

console.log(hp);