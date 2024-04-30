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
        let node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root, node){
        if (node.value < root.value) {
            if (root.left == nulll) {
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
    search(root, value){
        if (!root) {
            return false
        }else{
            if (root.value == value) {
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }
}

const bst = new BST()

bst.insert(23)
bst.insert(2)
bst.insert(43)
bst.insert(72)
bst.insert(7)
bst.insert(55)

console.log(bst.search(bst.root,52))

console.log(bst);