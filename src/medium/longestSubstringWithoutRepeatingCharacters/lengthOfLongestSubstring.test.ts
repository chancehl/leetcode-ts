import { describe, test, expect } from 'bun:test'

import { lengthOfLongestSubstring } from './lengthOfLongestSubstring'

describe('lengthOfLongestSubstring', () => {
    test('input 1', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
    })

    test('input 2', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
    })

    test('input 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
    })

    test('input 4', () => {
        expect(lengthOfLongestSubstring('')).toEqual(0)
    })

    test('input 5', () => {
        expect(lengthOfLongestSubstring('a')).toEqual(1)
    })

    test('input 6', () => {
        expect(lengthOfLongestSubstring('au')).toEqual(2)
    })

    test('input 7', () => {
        expect(lengthOfLongestSubstring('dvdf')).toEqual(3)
    })
})
