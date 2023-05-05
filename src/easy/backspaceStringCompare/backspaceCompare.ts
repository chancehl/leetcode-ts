import { Stack } from '@common/stack'

function backspaceCompare(s: string, t: string): boolean {
    let aStack = new Stack()
    let bStack = new Stack()

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            aStack.pop()
        } else {
            aStack.push(s[i])
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (t[j] === '#') {
            bStack.pop()
        } else {
            bStack.push(t[j])
        }
    }

    if (aStack.size() !== bStack.size()) {
        return false
    }

    while (aStack.size() >= 1) {
        let aValue = aStack.pop()
        let bValue = bStack.pop()

        if (aValue !== bValue) {
            return false
        }
    }

    return true
}

export { backspaceCompare }
