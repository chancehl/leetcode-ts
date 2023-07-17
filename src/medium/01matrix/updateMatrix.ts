import { Queue } from '@common/queue'
import { isValidCoordinatePair } from '@common/utils'

export function updateMatrix(mat: number[][]): number[][] {
    let seen = [...Array(mat.length)].map((_) => Array(mat[0].length).fill(false))

    let directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0], // up
    ]

    let queue = new Queue<{ row: number; col: number; steps: number }>()

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.enqueue({ row: i, col: j, steps: 0 })

                seen[i][j] = true
            }
        }
    }

    while (queue.elements.length > 0) {
        let current = queue.dequeue()

        if (current) {
            let { row, col, steps } = current

            for (const direction of directions) {
                const newRow = direction[0] + row
                const newCol = direction[1] + col

                if (isValidCoordinatePair([newRow, newCol], mat) && !seen[newRow][newCol]) {
                    seen[newRow][newCol] = true
                    queue.enqueue({ row: newRow, col: newCol, steps: steps + 1 })
                    mat[newRow][newCol] = steps + 1
                }
            }
        }
    }

    return mat
}
