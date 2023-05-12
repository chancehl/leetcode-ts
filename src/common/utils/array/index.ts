function createEmptyMatrix(n: number, m: number = n, initialValue: any = undefined): any[][] {
    return [...Array(n)].map((_) => Array(m).fill(initialValue))
}

export { createEmptyMatrix }
