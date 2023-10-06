import { describe, test, expect } from 'bun:test'

import { romanToInt } from './romanToInt'

describe('romanToInt', () => {
    test('input 1', () => {
        expect(romanToInt('III')).toEqual(3)
    })

    test('input 2', () => {
        expect(romanToInt('LVIII')).toEqual(58)
    })

    test('input 3', () => {
        expect(romanToInt('MCMXCIV')).toEqual(1994)
    })

    test('input 4', () => {
        expect(romanToInt('MCMXCIII')).toEqual(1993)
    })
})
