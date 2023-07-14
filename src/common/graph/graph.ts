export abstract class Graph {
    constructor() {}

    abstract addVertex(vertex: string): void

    abstract addEdge(vertexA: string, vertexB: string): void

    abstract removeVertex(vertex: string): void

    abstract removeEdge(vertexA: string, vertexB: string): void

    abstract hasEdge(vertexA: string, vertexB: string): boolean

    abstract toString(): string
}
