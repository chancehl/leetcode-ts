import { canFinish } from './canFinish'

describe('canFinish', () => {
    test('input 1', () => {
        expect(canFinish(2, [[1, 0]])).toEqual(true)
    })

    test('input 2', () => {
        expect(
            canFinish(2, [
                [1, 0],
                [0, 1],
            ]),
        ).toEqual(false)
    })

    test('input 3', () => {
        expect(
            canFinish(20, [
                [0, 10],
                [3, 18],
                [5, 5],
                [6, 11],
                [11, 14],
                [13, 1],
                [15, 1],
                [17, 4],
            ]),
        ).toEqual(false)
    })
})
