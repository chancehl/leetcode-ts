function twoSum(nums: number[], target: number): number[] {
    const map: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (map[diff] != null) {
            return [map[diff], i]
        } else {
            map[nums[i]] = i
        }
    }

    return []
}

export { twoSum }
