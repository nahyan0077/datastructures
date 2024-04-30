class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
        }
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            return null
        }
        for(let adjacentVertex in this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

const grp = new Graph()

grp.addVertex("A")
grp.addVertex("B")
grp.addVertex("C")
grp.addVertex("D")

grp.addEdges("A","B")
grp.addEdges("B","C")
grp.addEdges("C","D")
grp.addEdges("A","D")

console.log(grp.hasEdge("B","D"))

grp.display()