import { Stack } from '../stack'
import { Graph, Vertex } from './graph'

export class DirectedGraph extends Graph {
    public adjacencyList: Record<Vertex, Set<Vertex>>

    constructor() {
        super()
        this.adjacencyList = {}
    }

    addVertex(vertex: Vertex): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertexA: Vertex, vertexB: Vertex): void {
        if (!this.adjacencyList[vertexA]) {
            this.addVertex(vertexA)
        }

        if (!this.adjacencyList[vertexB]) {
            this.addVertex(vertexB)
        }

        this.adjacencyList[vertexA].add(vertexB)
    }

    removeVertex(vertex: Vertex): void {
        if (this.adjacencyList[vertex]) {
            // remove adjacent vertices first
            for (let key of Object.keys(this.adjacencyList)) {
                if (this.hasEdge(key, vertex)) {
                    this.removeEdge(key, vertex)
                }
            }

            delete this.adjacencyList[vertex] // remove the key from the map
        }
    }

    removeEdge(vertexA: Vertex, vertexB: Vertex): void {
        if (this.hasEdge(vertexA, vertexB)) {
            this.adjacencyList[vertexA].delete(vertexB)
        }
    }

    hasEdge(vertexA: Vertex, vertexB: Vertex): boolean {
        if (this.adjacencyList[vertexA] && this.adjacencyList[vertexB]) {
            return this.adjacencyList[vertexA].has(vertexB)
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

    static fromMatrix(matrix: Vertex[][]): DirectedGraph {
        let graph = new DirectedGraph()

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                let key = matrix[i][j]

                // up
                if (i > 0) {
                    graph.addEdge(key, matrix[i - 1][j])
                }

                // right
                if (j < matrix[0].length - 1) {
                    graph.addEdge(key, matrix[i][j + 1])
                }

                // down
                if (i < matrix.length - 1) {
                    graph.addEdge(key, matrix[i + 1][j])
                }

                // left
                if (j > 0) {
                    graph.addEdge(key, matrix[i][j - 1])
                }
            }
        }

        return graph
    }

    topologicalSort(): Vertex[] {
        let values = []

        let stack = new Stack<Vertex>()

        let visisted = new Set<Vertex>()

        for (const vertex of this.getVertices()) {
            if (!visisted.has(vertex)) {
                this.topologicallyVisitNode(vertex, visisted, stack)
            }
        }

        while (stack.elements.length > 0) {
            let value = stack.pop()

            if (value != null) {
                values.push(value)
            }
        }

        return values
    }

    private topologicallyVisitNode(vertex: Vertex, visited: Set<Vertex>, stack: Stack<Vertex> = new Stack()): void {
        visited.add(vertex)

        for (const adjacent of this.adjacencyList[vertex]) {
            if (!visited.has(adjacent)) {
                this.topologicallyVisitNode(adjacent, visited, stack)
            }
        }

        stack.push(vertex)
    }
}
