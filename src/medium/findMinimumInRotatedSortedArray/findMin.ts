function findMin(nums: number[]): number {
    let low = 0
    let high = nums.length - 1

    while (low < high) {
        let mid = Math.floor((low + high) / 2)

        if (nums[mid] > nums[nums.length - 1]) {
            // search right
            low = mid + 1
        } else {
            // search left
            high = mid
        }
    }

    return nums[low]
}

export { findMin }
