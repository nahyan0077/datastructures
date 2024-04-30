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
    removeEdges(vertex1,vertex2){
        this.adjasencyList[vertex1].delete(vertex2)
        this.adjasencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if (!this.adjasencyList[vertex]) {
            return null
        }
        for(let adjVert in this.adjasencyList[vertex]){
            this.removeEdges(adjVert,vertex)
        }
    }
    display(){
        for(let vertex in this.adjasencyList){
            console.log(vertex + " --> " + [...this.adjasencyList[vertex]]);
        }
    }
}

const grp = new Graph()

grp.addEdges(1,4)
grp.addEdges(3,4)
grp.addEdges(3,1)

grp.display()