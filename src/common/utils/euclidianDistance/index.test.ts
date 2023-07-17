import { euclidianDistance } from '.'

describe('euclidianDistance', () => {
    test('input 1', () => {
        expect(euclidianDistance([1, 3], [0, 0])).toEqual(Math.sqrt(10))
    })
})
