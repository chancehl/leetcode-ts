import { Queue } from '@common/queue'

class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	private visited: boolean = false; // note: this is exclusively used for traversal, searching

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
		const queue = new Queue<TreeNode>()

		let elements: number[] = []

		// enqueue current
		queue.enqueue(this)
		elements.push(this.val)

		while (queue.elements.length > 0) {
			let current = queue.dequeue()

			// enqueue left
			if (current && current.left && current.left.visited === false) {
				queue.enqueue(current.left)
				elements.push(current.left.val)
				current.left.visited = true
			}

			// enqueue right
			if (current && current.right && current.right.visited === false) {
				queue.enqueue(current.right)
				elements.push(current.right.val)
				current.right.visited = true
			}
		}

		return elements
	}

	private depthFirstTraversal(): number[] {
		return []
	}
}

export { TreeNode }
