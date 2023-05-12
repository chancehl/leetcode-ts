import { createEmptyMatrix } from './index'

describe('createEmptyMatrix', () => {
    test('can create a N x N matrix', () => {
        expect(createEmptyMatrix(2, 2)).toEqual([
            [undefined, undefined],
            [undefined, undefined],
        ])
    })

    test('can create a N x M matrix', () => {
        expect(createEmptyMatrix(3, 2)).toEqual([
            [undefined, undefined],
            [undefined, undefined],
            [undefined, undefined],
        ])
    })

    test('can create a square matrix with a single input value', () => {
        expect(createEmptyMatrix(3)).toEqual([
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
        ])
    })

    test('can fill an array with an initial value', () => {
        expect(createEmptyMatrix(2, 2, -Infinity)).toEqual([
            [-Infinity, -Infinity],
            [-Infinity, -Infinity],
        ])
    })
})
