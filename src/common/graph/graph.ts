import { Queue } from '../queue'
import { Stack } from '../stack'

export type Vertex = string | number

export abstract class Graph {
    public adjacencyList: Record<Vertex, Set<Vertex>>

    constructor() {
        this.adjacencyList = {}
    }

    abstract addVertex(vertex: Vertex): void

    abstract addEdge(vertexA: Vertex, vertexB: Vertex): void

    abstract removeVertex(vertex: Vertex): void

    abstract removeEdge(vertexA: Vertex, vertexB: Vertex): void

    abstract hasEdge(vertexA: Vertex, vertexB: Vertex): boolean

    abstract toString(): string

    breadthFirstTraversal(vertex: Vertex): Vertex[] | undefined {
        if (this.adjacencyList[vertex]) {
            const queue = new Queue<Vertex>([vertex])

            let visisted: Set<Vertex> = new Set()
            let elements: Vertex[] = []

            let current: Vertex | undefined

            while (queue.elements.length > 0) {
                current = queue.dequeue()

                if (current != null) {
                    visisted.add(current)

                    elements.push(current)

                    for (const element of this.adjacencyList[current]) {
                        if (!visisted.has(element)) {
                            // enqueue element
                            queue.enqueue(element)

                            // mark as visited
                            visisted.add(element)
                        }
                    }
                }
            }

            return elements
        }

        return undefined
    }

    depthFirstTraversal(vertex: Vertex): Vertex[] | undefined {
        const stack = new Stack<Vertex>()
        let visited = new Set<Vertex>()
        let elements = []

        stack.push(vertex)

        while (stack.elements.length > 0) {
            let current = stack.pop()

            if (current != null) {
                if (!visited.has(current)) {
                    visited.add(current)

                    elements.push(current)
                }

                for (const adjacentVertex of this.adjacencyList[current]) {
                    if (!visited.has(adjacentVertex)) {
                        stack.push(adjacentVertex)
                    }
                }
            }
        }

        return elements
    }

    size(): number {
        return Object.keys(this.adjacencyList).length
    }

    getVertices(): Vertex[] {
        return [...Object.keys(this.adjacencyList).map((key) => (/\d+/.test(key) ? Number.parseInt(key) : key))]
    }
}
