import { isPalindrome } from './isPalindrome'

describe('isPalindrome', () => {
    test('input 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true)
    })

    test('input 2', () => {
        expect(isPalindrome('race a car')).toEqual(false)
    })

    test('input 3', () => {
        expect(isPalindrome(' ')).toEqual(true)
    })

    test('input 4', () => {
        expect(isPalindrome('a.')).toEqual(true)
    })

    test('input 5', () => {
        expect(isPalindrome('0P')).toEqual(false)
    })
})
