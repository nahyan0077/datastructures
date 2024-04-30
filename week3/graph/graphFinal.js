class Graph {
    constructor() {                  ///check hereeeeeeee
        this.adjList = {}
    }
    addVertex(vertex){
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if (!this.adjList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasVertex(vertex1,vertex2){
        return (
            this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1)
        )
    }
    removeEdges(vertex1,vertex2){                   //remove checkkkkkkkkkkkkk
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){                              ///checkkkkkkkkkkk
        if (!this.adjList[vertex]) {
            return
        }
        for(let adjVertex of this.adjList[vertex]){
            this.removeEdges(vertex,adjVertex)
        }
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex + " --> " + [...this.adjList[vertex]]);
        }
    }
}

const grp = new Graph()

grp.addEdges(1,2)
grp.addEdges(2,3)
grp.addEdges(3,2)

grp.display()