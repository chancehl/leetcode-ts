import { Queue } from '@common/queue'
import { Stack } from '@common/stack'

type Order = 'pre-order' | 'post-order' | 'in-order'

type TraverseOptions = {
    order?: Order
    callback?: (node: TreeNode | null) => void
}

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    private visited: boolean = false // note: this is exclusively used for traversal, searching

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0
        this.left = left ?? null
        this.right = right ?? null
    }

    traverse(traversal: 'bfs' | 'dfs', options?: TraverseOptions): number[] {
        if (traversal == 'bfs') {
            return this.breadthFirstTraversal(options)
        } else {
            return this.depthFirstTraversal(options)
        }
    }

    private breadthFirstTraversal(options?: TraverseOptions): number[] {
        const queue = new Queue<TreeNode>([this])

        let elements: number[] = []

        let current: TreeNode | undefined

        while (queue.elements.length > 0) {
            current = queue.dequeue()

            if (current) {
                elements.push(current.val)

                // execute user callback if one was provided
                if (options?.callback) {
                    options.callback(current)
                }
            }

            // enqueue left
            if (current && current.left && current.left.visited === false) {
                queue.enqueue(current.left)
                current.left.visited = true
            }

            // enqueue right
            if (current && current.right && current.right.visited === false) {
                queue.enqueue(current.right)
                current.right.visited = true
            }
        }

        return elements
    }

    private depthFirstTraversal(options?: TraverseOptions): number[] {
        const stack = new Stack<TreeNode>([this])

        let elements: number[] = []

        let current: TreeNode | null

        while (stack.elements.length) {
            current = stack.pop()

            if (current) {
                elements.push(current.val)

                // execute user callback if one was provided
                if (options?.callback) {
                    options.callback(current)
                }
            }

            if (current && current.right) {
                stack.push(current.right)
            }

            if (current && current.left) {
                stack.push(current.left)
            }
        }

        return elements
    }

    private levelOrderTraversal(): number[][] {
        let values: number[][] = []

        let queue = new Queue<TreeNode>([this])

        let level = 0

        while (queue.elements.length > 0) {
            values.push([])

            let count = queue.elements.length

            while (count > 0) {
                const current = queue.dequeue()

                if (current != null) {
                    values[level].push(current.val)

                    if (current.left) {
                        queue.enqueue(current.left)
                    }

                    if (current.right) {
                        queue.enqueue(current.right)
                    }
                }

                count--
            }

            level++
        }

        return values
    }
}

function maxDepth(node: TreeNode | null): number {
    if (node == null) {
        return 0
    }

    const leftHeight = maxDepth(node.left)
    const rightHeight = maxDepth(node.right)

    return Math.max(leftHeight, rightHeight) + 1
}

export { TreeNode, maxDepth }
