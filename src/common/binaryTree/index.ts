import { Queue } from '@common/queue'
import { Stack } from '@common/stack'

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

	traverse(traversal: 'bfs' | 'dfs'): number[] {
		if (traversal == 'bfs') {
			return this.breadthFirstTraversal()
		} else {
			return this.depthFirstTraversal()
		}
	}

	private breadthFirstTraversal(): number[] {
		const queue = new Queue<TreeNode>([this])

		let elements: number[] = []

		let current: TreeNode | undefined;

		while (queue.elements.length > 0) {
			current = queue.dequeue()

			if (current) {
				elements.push(current.val)
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

	private depthFirstTraversal(): number[] {
		const stack = new Stack<TreeNode>([this])

		let elements: number[] = []

		let current: TreeNode | undefined;

		while (stack.elements.length) {
			current = stack.pop()

			if (current) {
				elements.push(current.val)
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
}

export { TreeNode }
