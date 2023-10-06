import { describe, test, expect } from 'bun:test'

import { climbStairs } from './climbStairs'

describe('climbStairs', () => {
    test('input 1', () => {
        expect(climbStairs(2)).toEqual(2)
    })

    test('input 2', () => {
        expect(climbStairs(3)).toEqual(3)
    })

    test('input 3', () => {
        expect(climbStairs(4)).toEqual(5)
    })

    test('input 4', () => {
        expect(climbStairs(5)).toEqual(8)
    })

    test('input 5', () => {
        expect(climbStairs(6)).toEqual(13)
    })
})
