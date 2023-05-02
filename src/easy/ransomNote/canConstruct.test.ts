import { canConstruct } from './canConstruct'

describe('canConstruct', () => {
    test('input 1', () => {
        expect(canConstruct('a', 'b')).toEqual(false)
    })

    test('input 2', () => {
        expect(canConstruct('aa', 'ab')).toEqual(false)
    })

    test('input 3', () => {
        expect(canConstruct('aa', 'aab')).toEqual(true)
    })
})
