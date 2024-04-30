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
        const node = new Node(value)
        if (this.root == null) {
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if (!root.right) {
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
        if(!root){
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
            }else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    min(root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
    max(root){
        if (!root.right) {
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
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const bst = new BST()

bst.insert(32)
bst.insert(75)
bst.insert(36)
bst.insert(8)
bst.insert(25)
bst.insert(3)
bst.insert(7)

bst.levelOrder()
console.log("------------------------");
bst.delete(75)
bst.levelOrder()
// console.log(bst.max(bst.root))
console.log("------------------------");
bst.preOrder(bst.root)

console.log(bst);