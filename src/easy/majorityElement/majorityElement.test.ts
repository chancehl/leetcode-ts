import { describe, test, expect } from 'bun:test'

import { majorityElement } from './majorityElement'

describe('majorityElement', () => {
    test('input 1', () => {
        expect(majorityElement([3, 2, 3])).toEqual(3)
    })

    test('input 2', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2)
    })
})
