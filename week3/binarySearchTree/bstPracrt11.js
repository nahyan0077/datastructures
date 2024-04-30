class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if (this.root == null) {
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
            root.value = this.min(root.right).value
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    min(root){
        if (!root.left) {
            return root
        }
        return this.min(root.left)
    }
    search(root,value){
        if (root == null) {
            return false
        }else{
            if (value < root.value) {
                this.search(root.left,value)
            }else if(value > root.value){
                this.search(root.right,value)
            }else{
                return true
            }
        }
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
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const bst = new BST()

bst.insert(23)
bst.insert(2)
bst.insert(43)
bst.insert(34)
bst.insert(72)
bst.insert(1)
bst.insert(7)
bst.insert(55)


console.log("------------");

// bst.preOrder(bst.root)
bst.levelOrder()
bst.delete(43)
console.log("------------");

bst.levelOrder()

console.log(bst.search(bst.root))