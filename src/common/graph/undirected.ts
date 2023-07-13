export class UndirectedGraph {
    public adjacencyList: Record<string, Set<string>>

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertexA: string, vertexB: string): void {
        if (!this.adjacencyList[vertexA]) {
            this.addVertex(vertexA)
        }

        if (!this.adjacencyList[vertexB]) {
            this.addVertex(vertexB)
        }

        this.adjacencyList[vertexA].add(vertexB)
        this.adjacencyList[vertexB].add(vertexA)
    }

    removeVertex(vertex: string): void {
        if (this.adjacencyList[vertex]) {
            // remove adjacent vertices first
            for (let adjacentVertex of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, adjacentVertex)
            }

            delete this.adjacencyList[vertex] // remove the key from the map
        }
    }

    removeEdge(vertexA: string, vertexB: string): void {
        if (this.hasEdge(vertexA, vertexB)) {
            this.adjacencyList[vertexA].delete(vertexB)
            this.adjacencyList[vertexB].delete(vertexA)
        }
    }

    hasEdge(vertexA: string, vertexB: string): boolean {
        if (this.adjacencyList[vertexA] && this.adjacencyList[vertexB]) {
            return this.adjacencyList[vertexA].has(vertexB) && this.adjacencyList[vertexB].has(vertexA)
        }

        return false
    }

    toString(): string {
        let str = ''

        for (let vertex in this.adjacencyList) {
            str = str.concat(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
            str = str.concat('\n')
        }

        return str
    }
}
