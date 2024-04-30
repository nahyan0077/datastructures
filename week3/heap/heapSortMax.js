// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     getLeftChildIndex(parentIndex) {
//         return (parentIndex * 2) + 1;
//     }

//     getRightChildIndex(parentIndex) {
//         return (parentIndex * 2) + 2;
//     }

//     swap(index1, index2) {
//         const temp = this.heap[index1];
//         this.heap[index1] = this.heap[index2];
//         this.heap[index2] = temp;
//     }

//     heapifyDown(index, size) {
//         let largest = index;
//         const leftChildIndex = this.getLeftChildIndex(index);
//         const rightChildIndex = this.getRightChildIndex(index);

//         if (leftChildIndex < size && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex;
//         }

//         if (rightChildIndex < size && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }

//         if (largest !== index) {
//             this.swap(index, largest);
//             this.heapifyDown(largest, size);
//         }
//     }

//     buildHeap(arr) {
//         this.heap = arr;
//         const size = this.heap.length;
//         for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
//             this.heapifyDown(i, size);
//         }
//     }

//     heapSort(arr) {
//         this.buildHeap(arr);
//         let size = this.heap.length;
//         for (let i = size - 1; i > 0; i--) {
//             this.swap(0, i);
//             size--;
//             this.heapifyDown(0, size);
//         }
//         return this.heap;
//     }
// }

// const heap = new MaxHeap();
// const arr = [12, 11, 13, 5, 6, 7];
// console.log("Original array:", arr);
// const sortedArr = heap.heapSort(arr);
// console.log("Sorted array:", sortedArr);


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
        let size = this.heap.length
        for(let i = Math.floor(size/2);i>=0;i--){
            this.heapifyDown(i,size)
        }
    }

    heapifyDown(index, size){
        let largest = index
        let leftIndex = 2 * index + 1
        let rightIndex = 2 * index + 2
        if ( leftIndex < size && this.heap[leftIndex] > this.heap[largest] ) {
            largest = leftIndex
        }
        if (rightIndex < size && this.heap[rightIndex] > this.heap[largest]){
            largest = rightIndex
        }
        if(largest !== index){
            this.swap(largest, index)
            this.heapifyDown(largest, size)
        }
    }
    heapSort(){
        let n = this.heap.length
        for(let i=n-1;i>0;i--){
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }
}

const hp = new maxHeap()

let arr = [34,78,25,68,31,47,97]

hp.buildHeap(arr)

console.log(hp);

hp.heapSort()

console.log(hp);
