import { search } from './search'

describe('search', () => {
    test('input 1', () => {
        expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
    })

    test('input 2', () => {
        expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
    })

    test('input 3', () => {
        expect(search([], 10)).toEqual(-1)
    })

    test('input 4', () => {
        expect(search([5], 5)).toEqual(0)
    })

    test('input 5', () => {
        expect(search([2, 5], 5)).toEqual(1)
    })
})
