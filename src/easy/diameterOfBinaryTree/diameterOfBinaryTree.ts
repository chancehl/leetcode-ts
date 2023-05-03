import { TreeNode, maxDepth } from '@common/binaryTree'
import { Stack } from '@common/stack'

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root == null) {
        return 0
    }

    const stack = new Stack<TreeNode>([root])

    let max = 0

    let current: TreeNode | null

    while (stack.elements.length) {
        current = stack.pop()

        if (current) {
            max = Math.max(max, maxDepth(current.left) + maxDepth(current.right))
        }

        if (current && current.right) {
            stack.push(current.right)
        }

        if (current && current.left) {
            stack.push(current.left)
        }
    }

    return max
}

export { diameterOfBinaryTree }
