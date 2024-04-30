class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BFS {
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
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    min(root){
        if (!root.left) {
            return root.value
        }
        return this.min(root.left)
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

const bfs = new BFS()

bfs.insert(3)
bfs.insert(8)
bfs.insert(5)
bfs.insert(6)
bfs.insert(1)

bfs.levelOrder()

bfs.delete(8)

console.log("------------");

bfs.levelOrder()

