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
    insert(value){
        let node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node){
        if(node.value < root.value){
            if (root.left == null) {
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if (root.right == null) {
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    levelOrder() {
        const queue = []
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
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root == null){
            return null
        }
        if(value < root.value){
            this.deleteNode(root.left,value)
        }else if(value > root.value){
            this.deleteNode(root.right,value)
        }else{
            if (!root.left && ! root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }else if(!root.left){
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(25)
bst.insert(15)
bst.insert(35)
bst.insert(10)
bst.insert(20)

bst.levelOrder(bst.root)
console.log("------------------------");
bst.delete(20)
bst.levelOrder(bst.root)

console.log(bst);

