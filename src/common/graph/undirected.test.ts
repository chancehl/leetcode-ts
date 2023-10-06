import { describe, test, expect } from 'bun:test'

import { UndirectedGraph } from './undirected'

describe('undirected', () => {
    test('can add a vertex', () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')

        expect(graph.adjacencyList['A']).not.toBeUndefined()
        expect(graph.adjacencyList['A']).toEqual(new Set())
    })

    test('can add multiple vertices', () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')

        expect(graph.adjacencyList['A']).not.toBeUndefined()
        expect(graph.adjacencyList['B']).not.toBeUndefined()
        expect(graph.adjacencyList['A']).toEqual(new Set())
        expect(graph.adjacencyList['B']).toEqual(new Set())
    })

    test('can add an edge between two existing vertices', () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')
        graph.addEdge('A', 'B')

        expect(graph.adjacencyList['A']).toEqual(new Set(['B']))
        expect(graph.adjacencyList['B']).toEqual(new Set(['A']))
    })

    test('calling add edge will create the vertices first if they do not already exist', () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')

        expect(graph.adjacencyList['C']).toBeUndefined()
        expect(graph.adjacencyList['A']).not.toContain('C')

        graph.addEdge('A', 'C')

        expect(graph.adjacencyList['A']).toEqual(new Set(['C']))
        expect(graph.adjacencyList['C']).not.toBeUndefined()
        expect(graph.adjacencyList['C']).toEqual(new Set(['A']))
    })

    test(`hasEdge returns true if the vertices both exist in the other's set`, () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')
        graph.addEdge('A', 'B')

        expect(graph.hasEdge('A', 'B')).toEqual(true)
    })

    test(`hasEdge returns false if the vertices do not exist in the other's set`, () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')

        expect(graph.hasEdge('A', 'B')).toEqual(false)
    })

    test(`hasEdge returns false if the vertex doesn't exist`, () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')

        expect(graph.hasEdge('A', 'C')).toEqual(false)
    })

    test('removeEdge can remove an existing edge', () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')
        graph.addEdge('A', 'B')

        expect(graph.hasEdge('A', 'B')).toEqual(true)

        graph.removeEdge('A', 'B')

        expect(graph.hasEdge('A', 'B')).toEqual(false)
    })

    test('removeEdge does not modify the adjacencyList if the edge does not exist', () => {
        const graph = new UndirectedGraph()

        graph.addVertex('A')
        graph.addVertex('B')
        graph.addVertex('C')
        graph.addEdge('A', 'B')

        const existingAdjacencyListForVertexA = graph.adjacencyList['A']
        const existingAdjacencyListForVertexC = graph.adjacencyList['C']

        graph.removeEdge('A', 'C')

        expect(graph.adjacencyList['A']).toEqual(existingAdjacencyListForVertexA)
        expect(graph.adjacencyList['C']).toEqual(existingAdjacencyListForVertexC)
    })

    test('removeVertex can remove a leaf node', () => {
        const graph = new UndirectedGraph()

        graph.addEdge('A', 'B')
        graph.addEdge('A', 'C')
        graph.addEdge('A', 'D')

        expect(graph.adjacencyList['A']).toEqual(new Set(['B', 'C', 'D']))
        expect(graph.adjacencyList['D']).toEqual(new Set(['A']))

        graph.removeVertex('D')

        expect(graph.adjacencyList['A']).toEqual(new Set(['B', 'C']))
        expect(graph.adjacencyList['D']).toBeUndefined()
    })

    test('removeVertex will remove edges between adjacent nodes before removing the element from the adjacency list', () => {
        const graph = new UndirectedGraph()

        graph.addEdge('A', 'B')
        graph.addEdge('A', 'C')
        graph.addEdge('A', 'D')

        expect(graph.adjacencyList['A']).toEqual(new Set(['B', 'C', 'D']))
        expect(graph.adjacencyList['B']).toEqual(new Set(['A']))
        expect(graph.adjacencyList['C']).toEqual(new Set(['A']))
        expect(graph.adjacencyList['D']).toEqual(new Set(['A']))

        graph.removeVertex('A')

        expect(graph.adjacencyList['A']).toBeUndefined()
        expect(graph.adjacencyList['B']).toEqual(new Set([]))
        expect(graph.adjacencyList['C']).toEqual(new Set([]))
        expect(graph.adjacencyList['D']).toEqual(new Set([]))
    })

    test('can construct a graph from a 2d array', () => {
        const graph = UndirectedGraph.fromMatrix([
            ['A', 'B', 'C'],
            ['D', 'E', 'F'],
            ['G', 'H', 'I'],
        ])

        expect(graph.adjacencyList['A']).toEqual(new Set(['B', 'D']))
        expect(graph.adjacencyList['B']).toEqual(new Set(['A', 'C', 'E']))
        expect(graph.adjacencyList['C']).toEqual(new Set(['B', 'F']))
        expect(graph.adjacencyList['D']).toEqual(new Set(['A', 'E', 'G']))
        expect(graph.adjacencyList['E']).toEqual(new Set(['B', 'D', 'F', 'H']))
        expect(graph.adjacencyList['F']).toEqual(new Set(['C', 'E', 'I']))
        expect(graph.adjacencyList['G']).toEqual(new Set(['D', 'H']))
        expect(graph.adjacencyList['H']).toEqual(new Set(['E', 'G', 'I']))
        expect(graph.adjacencyList['I']).toEqual(new Set(['F', 'H']))
    })

    test('can traverse breadth-first', () => {
        const graph = new UndirectedGraph()

        graph.addEdge(0, 1)
        graph.addEdge(0, 2)
        graph.addEdge(1, 2)
        graph.addEdge(1, 3)
        graph.addEdge(2, 4)
        graph.addEdge(3, 4)

        expect(graph.breadthFirstTraversal(0)).toEqual([0, 1, 2, 3, 4])
    })

    test('can traverse depth-first', () => {
        const graph = new UndirectedGraph()

        graph.addEdge(0, 1)
        graph.addEdge(0, 2)
        graph.addEdge(0, 3)
        graph.addEdge(2, 3)
        graph.addEdge(2, 4)

        expect(graph.depthFirstTraversal(0)).toEqual([0, 3, 2, 4, 1])
    })
})
