import { TreeNode } from '@common/binaryTree'
import { isSameTree } from './isSameTree'

describe('isSameTree', () => {
    test('input 1', () => {
        expect(isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)), new TreeNode(1, new TreeNode(2), new TreeNode(3)))).toEqual(true)
    })

    test('input 2', () => {
        expect(isSameTree(new TreeNode(1, new TreeNode(2)), new TreeNode(1, null, new TreeNode(2)))).toEqual(false)
    })

    test('input 3', () => {
        expect(isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(1)), new TreeNode(1, new TreeNode(1), new TreeNode(2)))).toEqual(false)
    })
})
