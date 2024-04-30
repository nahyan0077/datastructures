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
    createMirrorTree(root){
        if(!root){
            return null
        }

        let temp = root.left
        root.left = root.right
        root.right = temp

        this.createMirrorTree(root.left)
        this.createMirrorTree(root.right)
    }


}


const bst = new BinarySearchTree()
const bst1 = new BinarySearchTree()



bst.insert(55)
bst.insert(35)
bst.insert(65)
bst.insert(25)
bst.insert(40)


bst1.insert(55)
bst1.insert(35)
bst1.insert(65)
bst1.insert(25)
bst1.insert(40)


function checkIdentical(root1, root2) {
	if(!root1 && !root2) {
		return true;
	}
	if(!root1 || !root2) {
		return false;
	}
	if(root1.value !== root2.value) {
		return false;
	}

	return (
		checkIdentical(root1.left, root2.left) && 
		checkIdentical(root1.right, root2.right)
	);
}

console.log(checkIdentical(bst.root,bst1.root))

console.log(bst);

bst.createMirrorTree(bst.root)

console.log(bst);