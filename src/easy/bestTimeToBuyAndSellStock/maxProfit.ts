function maxProfit(prices: number[]): number {
	let i = 0;
	let j = 1;
	let max = 0;

	while (j < prices.length) {
		let currentPrice = prices[j] - prices[i]

		if (prices[i] < prices[j]) {
			max = Math.max(currentPrice, max)
		} else {
			i = j;
		}

		j++
	}

	return max;
};

export { maxProfit }
