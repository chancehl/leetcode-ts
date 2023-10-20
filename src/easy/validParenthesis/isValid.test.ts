import { describe, test, expect } from 'bun:test'

import { isValid } from './isValid'

describe('isValid', () => {
    test('input 1', () => {
        expect(isValid('()')).toEqual(true)
    })

    test('input 2', () => {
        expect(isValid('()[]{}')).toEqual(true)
    })

    test('input 3', () => {
        expect(isValid('(]')).toEqual(false)
    })

    test('input 4', () => {
        expect(isValid('(([[{}]]))')).toEqual(true)
    })

    test('input 5', () => {
        expect(isValid('(([}]]))')).toEqual(false)
    })
})
