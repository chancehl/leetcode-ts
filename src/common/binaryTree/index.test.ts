import { describe, test, expect } from 'bun:test'

import { TreeNode, maxDepth } from './index'

describe('TreeNode', () => {
    describe('traversal', () => {
        describe('breath first traversal', () => {
            test('on a balanced binary tree', () => {
                const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))

                expect(tree.traverse('bfs')).toEqual([4, 2, 7, 1, 3, 6, 9])
            })

            test('on an imbalanced binary tree', () => {
                const tree = new TreeNode(4, null, new TreeNode(7, new TreeNode(6), new TreeNode(9)))

                expect(tree.traverse('bfs')).toEqual([4, 7, 6, 9])
            })
        })

        describe('depth first traversal', () => {
            test('on a balanced binary tree', () => {
                const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))

                expect(tree.traverse('dfs')).toEqual([4, 2, 1, 3, 7, 6, 9])
            })

            test('on an imbalanced binary tree', () => {
                const tree = new TreeNode(4, null, new TreeNode(7, new TreeNode(6), new TreeNode(9)))

                expect(tree.traverse('dfs')).toEqual([4, 7, 6, 9])
            })
        })
    })

    describe('utilities', () => {
        describe('maxDepth', () => {
            test('imblanced tree', () => {
                expect(maxDepth(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)))).toEqual(3)
            })

            test('balanced tree', () => {
                expect(
                    maxDepth(
                        new TreeNode(
                            4,
                            new TreeNode(2, new TreeNode(1, new TreeNode(6), new TreeNode(8)), new TreeNode(3, new TreeNode(4), new TreeNode(2))),
                            new TreeNode(7, new TreeNode(6, new TreeNode(5), new TreeNode(7)), new TreeNode(9, new TreeNode(1), new TreeNode(6))),
                        ),
                    ),
                ).toEqual(4)
            })
        })
    })
})
