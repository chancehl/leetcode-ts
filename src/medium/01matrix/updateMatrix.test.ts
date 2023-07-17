import { updateMatrix } from './updateMatrix'

describe('updateMatrix', () => {
    test('input 1', () => {
        expect(
            updateMatrix([
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ]),
        ).toEqual([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ])
    })

    test('input 2', () => {
        expect(
            updateMatrix([
                [0, 0, 0],
                [0, 1, 0],
                [1, 1, 1],
            ]),
        ).toEqual([
            [0, 0, 0],
            [0, 1, 0],
            [1, 2, 1],
        ])
    })
})
