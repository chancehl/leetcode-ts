function climbStairs(n: number): number {
    let map: Record<number, number> = {}

    map[0] = 0
    map[1] = 1
    map[2] = 2

    for (let i = 3; i <= n; i++) {
        map[i] = map[i - 1] + map[i - 2]
    }

    return map[n]
}

export { climbStairs }
