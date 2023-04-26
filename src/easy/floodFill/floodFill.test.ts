import { floodFill } from './floodFill'

describe('floodFill', () => {
    test('input 1', () => {
        expect(
            floodFill(
                [
                    [1, 1, 1],
                    [1, 1, 0],
                    [1, 0, 1],
                ],
                1,
                1,
                2,
            ),
        ).toEqual([
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ])
    })

    test('input 2', () => {
        expect(
            floodFill(
                [
                    [1, 0],
                    [1, 0],
                ],
                0,
                0,
                2,
            ),
        ).toEqual([
            [2, 0],
            [2, 0],
        ])
    })

    // test('input 3', () => {
    //     expect(1).toEqual(0)
    // })
})
