import { describe, test, expect } from 'bun:test'

import { TreeNode } from '@common/binaryTree'

import { maxDepth } from './maxDepth'

describe('maxDepth', () => {
    test('input 1', () => {
        expect(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))).toEqual(3)
    })

    test('input 2', () => {
        expect(maxDepth(new TreeNode(1, null, new TreeNode(2)))).toEqual(2)
    })
})
