function containsDuplicate(nums: number[]): boolean {
    let map: Record<number, number> = {}

    for (const num of nums) {
        if (map[num] != null) {
            return true
        } else {
            map[num] = 1
        }
    }

    return false
}

export { containsDuplicate }
