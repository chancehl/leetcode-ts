import { containsDuplicate } from './containsDuplicate'

describe('containsDuplicate', () => {
    test('input 1', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toEqual(true)
    })

    test('input 2', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toEqual(false)
    })

    test('input 3', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true)
    })
})
