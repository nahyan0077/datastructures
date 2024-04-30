class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex){
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjList[vertex]) {
            return null
        }
        for (const adj of this.adjList[vertex]) {
            this.removeEdge(vertex,adj)
        }
        delete this.adjList[vertex]
    }
    display(){
        for (const vertex in this.adjList) {
            console.log(vertex + " --> " + [...this.adjList[vertex]]);
        }
    }
}

const grp = new Graph()

grp.addEdge("A","B")
grp.addEdge("C","D")
grp.addEdge("B","C")

grp.removeVertex("A")

grp.display()