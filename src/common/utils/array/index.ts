function createEmptyMatrix(n: number, m: number = n, initialValue: any = undefined): any[][] {
    return [...Array(n)].map((_) => Array(m).fill(initialValue))
}

function isValidCoordinatePair([row, col]: [number, number], matrix: any[][]): boolean {
    let validRow = 0 <= row && row < matrix.length
    let validCol = 0 <= col && col < matrix[0].length

    return validRow && validCol
}

export { createEmptyMatrix, isValidCoordinatePair }
