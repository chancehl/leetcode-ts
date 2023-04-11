function isPalindrome(s: string): boolean {
    let start = 0
    let end = s.length - 1

    while (start < end) {
        let a = s[start].toLowerCase()
        let b = s[end].toLowerCase()

        if (!a.match(/[a-z0-9]/)) {
            start++;
        } else if (!b.match(/[a-z0-9]/)) {
            end--;
        }
        else if (a !== b) {
            return false
        } else {
            start++;
            end--;
        }
    }

    return true
}

export { isPalindrome }
