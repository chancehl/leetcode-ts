import { Stack } from '@common/stack'

function isValid(s: string): boolean {
    const opposites: Record<string, string> = {
        '{': '}',
        '[': ']',
        '(': ')',
        '}': '{',
        ']': '[',
        ')': '(',
    }

    const openingSymbols = ['{', '[', '(']

    const stack = new Stack<string>()

    for (const symbol of s.split('')) {
        if (openingSymbols.includes(symbol)) {
            stack.push(symbol)
        } else {
            if (stack.peek() === opposites[symbol]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.elements.length === 0
}

export { isValid }
