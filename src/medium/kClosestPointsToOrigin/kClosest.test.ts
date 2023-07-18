import { kClosest } from './kClosest'

describe('kClosest', () => {
    test('input 1', () => {
        expect(
            kClosest(
                [
                    [1, 3],
                    [-2, 2],
                ],
                1,
            ),
        ).toEqual([[-2, 2]])
    })

    test('input 2', () => {
        expect(
            kClosest(
                [
                    [3, 3],
                    [5, -1],
                    [-2, 4],
                ],
                2,
            ),
        ).toEqual([
            [3, 3],
            [-2, 4],
        ])
    })

    test('input 3', () => {
        expect(
            kClosest(
                [
                    [0, 1],
                    [1, 0],
                ],
                2,
            ),
        ).toEqual([
            [1, 0],
            [0, 1],
        ])
    })
})
