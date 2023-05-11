function lengthOfLongestSubstring(s: string): number {
    let slow = 0
    let max = 0

    while (slow <= s.length) {
        let fast = slow
        let chars = new Set()

        while (fast <= s.length) {
            if (chars.has(s[fast])) {
                break
            } else {
                chars.add(s[fast])
                fast++
            }
        }

        max = Math.max(max, s.slice(slow, fast).length)

        slow++
    }

    return max
}

export { lengthOfLongestSubstring }
