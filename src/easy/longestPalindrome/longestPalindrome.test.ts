import { describe, test, expect } from 'bun:test'

import { longestPalindrome } from './longestPalindrome'

describe('longestPalindrome', () => {
    test('input 1', () => {
        expect(longestPalindrome('abccccdd')).toEqual(7)
    })

    test('input 2', () => {
        expect(longestPalindrome('a')).toEqual(1)
    })

    test('input 3', () => {
        expect(longestPalindrome('aabbxy')).toEqual(5)
    })

    test('input 3', () => {
        expect(longestPalindrome('ccc')).toEqual(3)
    })
})
