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
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if (node.value < root.value) {
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
            return root   //checkckkkkkkkkkkkkk
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {     //if doubt --------------
                return root.right
            }else if (root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    min(root){                            ///checlkkkkkkkk
        if (!root.left) {
            return root
        }
        return this.min(root.left)
    }
    max(root){
        if (!root.right) {
            return root
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

const bst = new BST()

bst.insert(21)
bst.insert(51)
bst.insert(16)
bst.insert(67)
bst.insert(174)

bst.levelOrder()

bst.delete(51)

console.log("-----------------");

bst.levelOrder()

console.log(bst);