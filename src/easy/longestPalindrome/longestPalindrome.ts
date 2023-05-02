function longestPalindrome(s: string): number {
    let map: Record<string, number> = {}

    for (const char of s.split('')) {
        if (map[char] != null) {
            map[char] = map[char] + 1
        } else {
            map[char] = 1
        }
    }

    const keys = Object.keys(map)

    let len = 0
    let solo = 0

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        let count = map[key]

        if (count % 2 === 0) {
            len += count
        } else if (count % 2 === 1 && count > 2) {
            len += count - 1
            solo++
        } else {
            solo++
        }
    }

    return len + (solo >= 1 ? 1 : 0)
}

export { longestPalindrome }
