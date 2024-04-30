class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
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
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if (root.left == null) {
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if (root.right == null) {
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    levelOrder(){
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
    min(root){
        if(!root.left){
            return root
        }
        return this.min(root.left)
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if (root == null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(this.right,root.value)
        }
        return root
    }
}

const bst = new binarySearchTree()

bst.insert(23)
bst.insert(56)
bst.insert(34)
bst.insert(87)
bst.insert(58)


bst.levelOrder()

bst.delete(87)
console.log("--------------");
bst.levelOrder()