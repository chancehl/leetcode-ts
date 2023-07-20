import { TreeNode } from '@common/binaryTree'
import { Queue } from '@common/queue'

function levelOrder(root: TreeNode | null): number[][] {
    let values: number[][] = []

    if (root) {
        let queue = new Queue<TreeNode>([root])

        let level = 0

        while (queue.elements.length > 0) {
            values.push([])

            let count = queue.elements.length

            while (count > 0) {
                const element = queue.dequeue()

                if (element != null) {
                    values[level].push(element.val)

                    if (element.left) {
                        queue.enqueue(element.left)
                    }

                    if (element.right) {
                        queue.enqueue(element.right)
                    }
                }

                count--
            }

            level++
        }
    }

    return values
}

export { levelOrder }
