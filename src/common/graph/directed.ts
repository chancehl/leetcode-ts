export class DirectedGraph {
    private adjacencyList: Record<string, Set<string>>

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: string): void {
        // TODO
    }

    addEdge(vertexA: string, vertexB: string): void {
        // TODO
    }

    removeVertex(vertex: string): void {
        // TODO
    }

    removeEdge(vertexA: string, vertexB: string): void {
        // TODO
    }

    hasEdge(vertexA: string, vertexB: string): boolean {
        // TODO
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
