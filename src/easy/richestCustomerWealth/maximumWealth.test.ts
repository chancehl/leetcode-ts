import { maximumWealth } from './maximumWealth'

describe('maximumWealth', () => {
    test('input 1', () => {
        expect(
            maximumWealth([
                [1, 2, 3],
                [3, 2, 1],
            ]),
        ).toEqual(6)
    })

    test('input 2', () => {
        expect(
            maximumWealth([
                [1, 5],
                [7, 3],
                [3, 5],
            ]),
        ).toEqual(10)
    })

    test('input 3', () => {
        expect(
            maximumWealth([
                [2, 8, 7],
                [7, 1, 3],
                [1, 9, 5],
            ]),
        ).toEqual(17)
    })
})
