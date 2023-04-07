import { isValid } from './isValid'

describe('isValid', () => {
    test('TEST_CASE_1', () => {
        expect(isValid('()')).toEqual(true)
    })

    test('TEST_CASE_2', () => {
        expect(isValid('()[]{}')).toEqual(true)
    })

    test('TEST_CASE_3', () => {
        expect(isValid('(]')).toEqual(false)
    })

    test('TEST_CASE_4', () => {
        expect(isValid('(([[{}]]))')).toEqual(true)
    })

    test('TEST_CASE_5', () => {
        expect(isValid('(([}]]))')).toEqual(false)
    })
})
