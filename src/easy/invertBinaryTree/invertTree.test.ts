import { TreeNode } from '@common/binaryTree'

import { invertTree } from './invertTree'

describe('invertTree', () => {
    test('input 1', () => {
        const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))

        expect(invertTree(root)).toEqual(new TreeNode(4, new TreeNode(7, new TreeNode(9), new TreeNode(6)), new TreeNode(2, new TreeNode(3), new TreeNode(1))))
    })

    // test('input 2', () => {
    // 	expect(1).toEqual(0)
    // })

    // test('input 3', () => {
    // 	expect(1).toEqual(0)
    // })
})
