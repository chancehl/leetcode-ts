import { TreeNode, maxDepth } from '@common/binaryTree'

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root == null) {
        return 0
    }

    let max = 0

    root.traverse('dfs', {
        callback: (node) => {
            max = Math.max(max, maxDepth(node?.left ?? null) + maxDepth(node?.right ?? null))
        },
    })

    return max
}

// The alternative code below works with leetcode because you can't modify the TreeNode class in the leetcode IDE.

// function diameterOfBinaryTree(root: TreeNode | null): number {
//     if (root == null) {
//         return 0
//     }

//     const stack = new Stack<TreeNode>([root])

//     let max = 0

//     let current: TreeNode | null

//     // depth first search of each node and grabbing it's depth
//     while (stack.elements.length) {
//         current = stack.pop()

//         if (current) {
//             max = Math.max(max, maxDepth(current.left) + maxDepth(current.right))
//         }

//         if (current && current.right) {
//             stack.push(current.right)
//         }

//         if (current && current.left) {
//             stack.push(current.left)
//         }
//     }

//     return max
// }

export { diameterOfBinaryTree }
