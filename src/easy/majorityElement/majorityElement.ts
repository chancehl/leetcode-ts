function majorityElement(nums: number[]): number {
    let map: Record<number, number> = {}

    let target = nums.length / 2

    for (const num of nums) {
        if (map[num] != null) {
            map[num] = map[num] + 1
        } else {
            map[num] = 1
        }

        if (map[num] >= target) {
            return num
        }
    }

    return -1 // this should never get hit, the majority element will always exist in the input
}

export { majorityElement }
