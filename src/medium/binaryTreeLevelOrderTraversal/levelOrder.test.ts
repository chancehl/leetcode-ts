import { describe, test, expect } from 'bun:test'

import { TreeNode } from '@common/binaryTree'

import { levelOrder } from './levelOrder'

describe('levelOrder', () => {
    test('input 1', () => {
        const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

        expect(levelOrder(tree)).toEqual([[3], [9, 20], [15, 7]])
    })

    test('input 2', () => {
        expect(levelOrder(new TreeNode(1))).toEqual([[1]])
    })

    test('input 3', () => {
        expect(levelOrder(null)).toEqual([])
    })

    test('input 4', () => {
        const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5)))

        expect(levelOrder(tree)).toEqual([[1], [2, 3], [4, 5]])
    })
})
