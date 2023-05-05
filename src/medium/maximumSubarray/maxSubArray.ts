function maxSubArray(nums: number[]): number {
    let localMax = 0
    let globalMax = -Infinity

    for (let i = 0; i < nums.length; i++) {
        localMax = Math.max(nums[i], nums[i] + localMax)

        globalMax = Math.max(localMax, globalMax)
    }

    return globalMax
}

export { maxSubArray }
