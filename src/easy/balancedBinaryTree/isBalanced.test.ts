import { TreeNode } from '@common/binaryTree'
import { isBalanced } from './isBalanced'

describe('isBalanced', () => {
    test('input 1', () => {
        expect(isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))).toEqual(true)
    })

    test('input 2', () => {
        expect(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2)))).toEqual(false)
    })

    test('input 3', () => {
        expect(isBalanced(new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))))).toEqual(false)
    })
})
