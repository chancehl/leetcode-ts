import { Graph, GraphNode } from './index'

describe('graph', () => {
    test('can add edge to empty graph', () => {
        const graph = new Graph()

        const [root] = graph.addEdge(1, 2)

        expect(root.simplify()).toEqual({ value: 1, adjacents: [2] })
    })

    test('can add edge to a populated graph', () => {
        const graph = new Graph()

        graph.addEdge(1, 2)
        graph.addEdge(1, 3)
        graph.addEdge(1, 4)

        expect(graph.simplify()).toEqual({ 1: [2, 3, 4], 2: [1], 3: [1], 4: [1] })
    })

    test('can remove an edge from a populated graph', () => {
        const graph = new Graph()

        graph.addEdge(1, 2)
        graph.addEdge(1, 3)
        graph.addEdge(1, 4)

        expect(graph.simplify()).toEqual({ 1: [2, 3, 4], 2: [1], 3: [1], 4: [1] })

        graph.removeEdge(1, 3)

        expect(graph.simplify()).toEqual({ 1: [2, 4], 2: [1], 3: [], 4: [1] })
    })

    test('can add a vertex to an empty graph', () => {
        const graph = new Graph()

        graph.addVertex(1)

        expect(graph.simplify()).toEqual({ 1: [] })
    })

    test('can add a vertex to a populated graph', () => {
        const graph = new Graph()

        graph.addEdge(1, 2)
        graph.addEdge(1, 3)
        graph.addEdge(1, 4)

        graph.addVertex(5)

        expect(graph.simplify()).toEqual({ 1: [2, 3, 4], 2: [1], 3: [1], 4: [1], 5: [] })
    })

    test('can remove a vertex from a graph of size 1', () => {
        const graph = new Graph()

        graph.addVertex(1)
        graph.removeVertex(1)

        expect(graph.simplify()).toEqual({})
    })

    test('can remove a vertex from a graph of size n', () => {
        const graph = new Graph()

        graph.addVertex(1)
        graph.addVertex(2)
        graph.addVertex(3)
        graph.addVertex(4)

        graph.removeVertex(1)

        expect(graph.simplify()).toEqual({ 2: [], 3: [], 4: [] })
    })

    test('can create a graph object from a matrix', () => {
        const graph = Graph.fromMatrix(
            [
                [0, 1],
                [1, 1],
            ],
            'directed',
        )

        expect(graph.simplify()).toEqual({
            '0,0': ['1,0', '0,1'],
            '0,1': ['1,1', '0,0'],
            '1,0': ['0,0', '1,1'],
            '1,1': ['0,1', '1,0'],
        })
    })
})
