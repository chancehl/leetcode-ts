function maxProfit(prices: number[]): number {
    let slow = 0
    let fast = 1
    let max = 0

    while (fast < prices.length) {
        let currentPrice = prices[fast] - prices[slow]

        if (prices[slow] < prices[fast]) {
            max = Math.max(currentPrice, max)
        } else {
            slow = fast
        }

        fast++
    }

    return max
}

export { maxProfit }
