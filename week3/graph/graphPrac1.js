class Graph {
    constructor() {
        this.adjasencyList = {}
    }
    addVertex(vertex){
        if (!this.adjasencyList[vertex]) {
            this.adjasencyList[vertex] = new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if (!this.adjasencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjasencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjasencyList[vertex1].add(vertex2)
        this.adjasencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjasencyList[vertex1].has(vertex2) &&
            this.adjasencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjasencyList[vertex1].delete(vertex2)
        this.adjasencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjasencyList[vertex]) {
            return
        }
        for(let adjacent of this.adjasencyList[vertex]){
            this.removeEdge(vertex,adjacent)
        }
        delete this.adjasencyList[vertex]
    }
    display(){
        for(let vertex in this.adjasencyList){
            console.log(vertex + " ---> " + [...this.adjasencyList[vertex]]);
        }
    }

}

const gp = new Graph()

gp.addVertex("A")
gp.addVertex("B")
gp.addVertex("C")
gp.addVertex("D")

gp.addEdges("A","B")
gp.addEdges("B","C")
gp.addEdges("C","D")
gp.addEdges("A","D")

gp.removeEdge("A","B")

gp.display()

console.log(gp);