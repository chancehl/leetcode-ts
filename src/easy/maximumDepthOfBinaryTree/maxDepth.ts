import { TreeNode } from '@common/binaryTree'

function maxDepth(node: TreeNode | null): number {
    if (node == null) {
        return 0
    }

    const leftHeight = maxDepth(node.left)
    const rightHeight = maxDepth(node.right)

    return Math.max(leftHeight, rightHeight) + 1
}

export { maxDepth }
