class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) {
                root.left = newNode
            }else {
                this.insertNode(root.left, newNode)
            }
        }else {
            if (root.right == null) {
                root.right = newNode
            }else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value){
        if (!root) {
            return false
        }else {
            if (root.value == value) {
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

}


const bst = new BinarySearchTree()

bst.insert(23)
bst.insert(2)
bst.insert(43)
bst.insert(72)
bst.insert(7)
bst.insert(55)

console.log(bst.search(bst.root, 65))
bst.preOrder(bst.root)
console.log("-------pree");
bst.levelOrder()
console.log("-------inn");
bst.inOrder(bst.root)
console.log("-------postt");
bst.postOrder(bst.root)
console.log("-------");
console.log(bst);