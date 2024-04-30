// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BST {
//     constructor() {
//         this.root = null
//     }
//     insert(value){
//         let node = new Node(value)
//         if(this.root == null){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,value){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }
//     }
// }


// class TrieNode {
//     constructor() {
//         this.children = {}
//         this.isEnd = false
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEnd = true
//     }
// }

// const tr = new Trie()


// remove(){
//     if(this.heap.length == 0){
//         return null
//     }
//     let rmv = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.heapifyDown(0,this.heap.length)
//     return rmv
// }
// heapifyDown(index,size){
//     let largest = index
//     let left = 2 * index + 1
//     let right = 2 * index + 2
//     if(left < size )
// }

// bfs(){
//     let queue = []
//     queue.push(this.root)
//     while (queue.length) {
//         let curr = queue.shift()
//         console.log(curr);
//         if (curr.left) {
//             queue.push(curr.left)
//         }
//         if (curr.right) {
//             queue.push(curr.right)
//         }
//     }
// }

