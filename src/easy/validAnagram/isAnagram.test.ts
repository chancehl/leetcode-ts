import { describe, test, expect } from 'bun:test'

import { isAnagram } from './isAnagram'

describe('isAnagram', () => {
    test('input 1', () => {
        expect(isAnagram('anagram', 'nagaram')).toEqual(true)
    })

    test('input 2', () => {
        expect(isAnagram('rat', 'car')).toEqual(false)
    })

    test('input 3', () => {
        expect(isAnagram('a', 'ab')).toEqual(false)
    })
})
