function maximumWealth(accounts: number[][]): number {
    let max = 0

    for (const account of accounts) {
        let sum = account.reduce((val, curr) => val + curr, 0)

        max = Math.max(max, sum)
    }

    return max
}

export { maximumWealth }
