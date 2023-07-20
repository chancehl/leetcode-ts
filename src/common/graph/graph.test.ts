import { DirectedGraph } from './directed'

import { Graph } from './graph'

// note: graph is abstract, so it can't be instantiated. we have to use either directed/undirected graph class instead.
describe('graph', () => {
    test('can calculate size', () => {
        const graph = new DirectedGraph()

        graph.addVertex(1)
        graph.addVertex(2)
        graph.addVertex(3)
        graph.addVertex(4)

        expect(graph.size()).toEqual(4)
    })

    test('can return vertices as an array of strings', () => {
        const graph = new DirectedGraph()

        graph.addVertex('ORD')
        graph.addVertex('LAX')
        graph.addVertex('IAD')
        graph.addVertex('PDX')

        expect(graph.getVertices()).toEqual(['ORD', 'LAX', 'IAD', 'PDX'])
    })

    test('can return vertices as an array of numbers', () => {
        const graph = new DirectedGraph()

        graph.addVertex(1)
        graph.addVertex(2)
        graph.addVertex(3)
        graph.addVertex(4)

        expect(graph.getVertices()).toEqual([1, 2, 3, 4])
    })
})
