import { TreeNode, maxDepth } from '@common/binaryTree'
import { Stack } from '@common/stack'

function isBalanced(root: TreeNode | null): boolean {
    if (root == null) {
        return true
    }

    let stack = new Stack<TreeNode>([root])

    let current

    while (stack.elements.length) {
        current = stack.pop()

        let leftDepth = maxDepth(current?.left ?? null)
        let rightDepth = maxDepth(current?.right ?? null)

        if (Math.abs(leftDepth - rightDepth) > 1) {
            return false
        }

        if (current?.left) {
            stack.push(current.left)
        }

        if (current?.right) {
            stack.push(current.right)
        }
    }

    return true
}

export { isBalanced }
