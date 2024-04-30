class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        } if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
        }
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (const adjacenetVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacenetVertex)
        }
        delete this.adjacencyList[vertex]
    }
    dfs(startVertex) {
        const visited = {};
        const result = [];
        const dfsHelper = (currentVertex) => {
            if (!currentVertex) return;
            visited[currentVertex] = true;
            result.push(currentVertex);
            for (const child of this.adjacencyList[currentVertex]) {
                if (!visited[child]) {
                    dfsHelper(child);
                }
            }
        };

        dfsHelper(startVertex);
        return result;
    }

    bfs(startVertex) {
        if (!this.adjacencyList[startVertex]) {
            return;
        }

        const visited = {};
        const queue = [];
        queue.push(startVertex);
        visited[startVertex] = true;

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log(currentVertex);
            for (const child of this.adjacencyList[currentVertex]) {
                if (!visited[child]) {
                    queue.push(child);
                    visited[child] = true;
                }
            }
        }
    }

}

const grp = new Graph()

grp.addVertex('A')
grp.addVertex('B')
grp.addVertex('C')

grp.addEdge("A", 'B')
grp.addEdge("B", 'C')


console.log(grp);

console.log(grp.hasEdge('A', 'B'))
console.log(grp.hasEdge('A', 'C'))

// grp.removeEdge("A","B")
// grp.removeVertex("A")


grp.display()

console.log("---------");

grp.bfs("A")

console.log("---------");
grp.dfs("A")