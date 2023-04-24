import { TreeNode } from '@common/binaryTree'

function invertTree(root: TreeNode | null): TreeNode | null {
	if (root == null) {
		return null
	}

	let tmp = root.left

	root.left = root.right
	root.right = tmp

	invertTree(root.left)
	invertTree(root.right)

	return root
}

export { invertTree }
