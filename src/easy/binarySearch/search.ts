function search(nums: number[], target: number): number {
    let slow = 0
    let fast = nums.length - 1

    while (slow <= fast) {
        let mid = Math.floor((slow + fast) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            // search left
            fast = mid - 1
        } else {
            // search right
            slow = mid + 1
        }
    }

    return -1
}

export { search }
