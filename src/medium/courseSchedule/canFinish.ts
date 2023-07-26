import { DirectedGraph } from '@common/graph'

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = new DirectedGraph()

    for (const [a, b] of prerequisites) {
        graph.addEdge(a, b)
    }

    return !hasCycle(graph)
}

function hasCycle(graph: DirectedGraph): boolean {
    try {
        // try sorting
        const _sorted = graph.topologicalSort()

        // if no error is thrown, that means we have a acyclic graph
        return false
    } catch (_err) {
        // this is a hack but it works. we can trust our topological sort algorithm to throw an error if we've hit a cycle.
        return true
    }
}

export { canFinish }
