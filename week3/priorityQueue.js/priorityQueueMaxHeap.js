class priorityQueue {
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
        for(let i=Math.floor(n/2);i>=0;i--){
            this.heapifyDown(i,n)
        }
    }
    enqueue(value,priority){
        this.heap.push({value,priority})
        this.heapifyUp()
    }
    dequeue(){
        if(this.heap.length == 0){
            return null
        }
        let highestPriority = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0,this.heap.length)
        return highestPriority.value
    }
    heapifyUp(){
        let currIndex = this.heap.length - 1
        while (currIndex > 0) {
            const parentIndex = Math.floor((currIndex - 1)/2)
            if (this.heap[currIndex].priority < this.heap[parentIndex].priority) {
                this.swap(currIndex,parentIndex)
                currIndex = parentIndex
            }else{
                break
            }
        }
    }
    heapifyDown(index, size){
        let smallest = index
        let left = 2 * index + 1
        let right = 2 * index + 2
        if (left < size && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left
        }
        if (right < size && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right
        }
        if (index != smallest) {
            this.swap(index,smallest)
            this.heapifyDown(smallest,size)
        }
    }
}

const mnhp = new priorityQueue()

const arr = [{ value: 35, priority: 5 }, { value: 56, priority: 7 }, { value: 12, priority: 1 }, { value: 43, priority: 3 }, { value: 12, priority: 4 }, { value: 67, priority: 0 }, { value: 23, priority: 2 }, { value: 76, priority: 6 }];
mnhp.buildHeap(arr)

console.log(mnhp);

mnhp.enqueue(121,8)
mnhp.enqueue(122,9)

console.log(mnhp);
console.log(mnhp.dequeue())
console.log(mnhp);