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

    // test('input 3', () => {
    // TODO: implement a binaryTree.from([...]) method
    // this corresponds to: [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
    // expect(diameterOfBinaryTree(root)).toEqual(8)
    // })
})
