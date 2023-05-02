function canConstruct(ransomNote: string, magazine: string): boolean {
    let map: Record<string, number> = {}

    for (const char of magazine.split('')) {
        if (map[char] != null) {
            map[char] = map[char] + 1
        } else {
            map[char] = 1
        }
    }

    for (const char of ransomNote.split('')) {
        if (map[char] == null || map[char] <= 0) {
            return false // this character doesn't exist or we've already used them all, return false
        } else {
            map[char] = map[char] - 1
        }
    }

    return true
}

export { canConstruct }
