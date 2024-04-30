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
    isEmpty() {
        return this.root == null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value == value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
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

bst.insert(55)
bst.insert(35)
bst.insert(65)
bst.insert(25)
bst.insert(40)

bst.levelOrder()


function checkIdentical(root1,root2) {
    if (!root1 && !root2) {
        return true
    }
    if (!root1 || !root2) {
        return false
    }

    if (root1.value != root2.value) {
        return false
    }
    return (
        checkIdentical(root1.left,root2.right) &&
        checkIdentical(root1.right,root2.left)
    )
}
