import { Queue } from '..'

type Direction = 'undirected' | 'directed'

type NodeValueType = string | number

class Graph {
    private direction: Direction

    private nodes: Map<NodeValueType, GraphNode>

    constructor(direction: Direction = 'undirected') {
        this.direction = direction
        this.nodes = new Map()
    }

    addEdge(source: NodeValueType, destination: NodeValueType) {
        const sourceNode = this.addVertex(source)
        const destinationNode = this.addVertex(destination)

        sourceNode.addAdjacent(destinationNode)

        if (this.direction === 'undirected') {
            destinationNode.addAdjacent(sourceNode)
        }

        return [sourceNode, destinationNode]
    }

    removeEdge(source: NodeValueType, destination: NodeValueType) {
        const sourceNode = this.nodes.get(source)
        const destinationNode = this.nodes.get(destination)

        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode)

            if (this.direction === 'undirected') {
                destinationNode.removeAdjacent(sourceNode)
            }
        }

        return [sourceNode, destinationNode]
    }

    addVertex(value: NodeValueType) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value) as GraphNode
        } else {
            const vertex = new GraphNode(value)

            this.nodes.set(value, vertex)

            return vertex
        }
    }

    removeVertex(value: NodeValueType) {
        const current = this.nodes.get(value)

        if (current) {
            for (const node of this.nodes.values()) {
                node.removeAdjacent(current)
            }
        }

        return this.nodes.delete(value)
    }

    static fromMatrix(m: NodeValueType[][], direction: Direction = 'undirected') {
        let graph = new Graph(direction)

        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[0].length; j++) {
                // up
                if (i - 1 >= 0) {
                    graph.addEdge(`${i},${j}`, `${i - 1},${j}`)
                }

                // down
                if (i + 1 <= m.length - 1) {
                    graph.addEdge(`${i},${j}`, `${i + 1},${j}`)
                }

                // left
                if (j - 1 >= 0) {
                    graph.addEdge(`${i},${j}`, `${i},${j - 1}`)
                }

                // right
                if (j + 1 <= m[0].length - 1) {
                    graph.addEdge(`${i},${j}`, `${i},${j + 1}`)
                }
            }
        }

        return graph
    }

    bfs(root: GraphNode) {
        const visited = new Map()
        const queue = new Queue([root])

        let elements: any[] = []
        let current: GraphNode | undefined

        while (queue.elements.length > 0) {
            current = queue.dequeue()

            if (current) {
                elements.push(current.value)

                visited.set(current, true)

                current.getAdjacents().forEach((adjacent) => {
                    if (!visited.has(adjacent)) {
                        queue.enqueue(adjacent)
                    }
                })
            }
        }

        return elements
    }

    simplify() {
        let simplifiedMap: Record<string | number, NodeValueType[]> = {}

        for (const key of this.nodes.keys()) {
            simplifiedMap[key.toString()] = this.nodes.get(key)?.adjacents.map((node) => node.value) ?? []
        }

        return simplifiedMap
    }
}

class GraphNode {
    value: NodeValueType

    adjacents: GraphNode[]

    constructor(value: NodeValueType, adjacents: GraphNode[] = []) {
        this.value = value
        this.adjacents = adjacents
    }

    addAdjacent(node: GraphNode) {
        this.adjacents.push(node)
    }

    removeAdjacent(node: GraphNode) {
        const index = this.adjacents.indexOf(node)

        if (index > -1) {
            this.adjacents.splice(index, 1)

            return node
        }
    }

    getAdjacents() {
        return this.adjacents
    }

    isAdjacent(node: GraphNode) {
        return this.adjacents.indexOf(node) > -1
    }

    simplify() {
        return { value: this.value, adjacents: this.adjacents.map((node) => node.value) }
    }
}

export { Graph, GraphNode, Direction }
