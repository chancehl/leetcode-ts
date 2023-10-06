import { describe, test, expect } from 'bun:test'

import { TreeNode } from '@common/binaryTree'
import { diameterOfBinaryTree } from './diameterOfBinaryTree'

describe('diameterOfBinaryTree', () => {
    test('input 1', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))

        expect(diameterOfBinaryTree(root)).toEqual(3)
    })

    test('input 2', () => {
        const root = new TreeNode(1, new TreeNode(2))

        expect(diameterOfBinaryTree(root)).toEqual(1)
    })
})
