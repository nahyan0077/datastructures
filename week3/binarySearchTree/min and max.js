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
        let node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if (node.value < root.value) {
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
    min(root){
        if (!root.left) {
            return root.value
        }
        return this.min(root.left)
    }
    max(root){
        if(!root.right){
            return root.value
        }
        return this.max(root.right)
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(11)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(9)
bst.insert(13)
bst.insert(7)

bst.levelOrder()

console.log("---------------------");
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))

