import { canAttendMeetings, hasOverlap } from './canAttendMeetings'

describe('canAttendMeetings', () => {
    test('input 1', () => {
        expect(
            canAttendMeetings([
                [0, 30],
                [5, 10],
                [15, 20],
            ]),
        ).toEqual(false)
    })

    test('input 2', () => {
        expect(
            canAttendMeetings([
                [7, 10],
                [2, 4],
            ]),
        ).toEqual(true)
    })

    test('input 3', () => {
        expect(
            canAttendMeetings([
                [0, 30],
                [60, 240],
                [90, 120],
            ]),
        ).toEqual(false)
    })
})

describe('hasOverlap', () => {
    test('input 1', () => {
        expect(hasOverlap([0, 10], [5, 15])).toEqual(true)
    })

    test('input 2', () => {
        expect(hasOverlap([5, 10], [2, 7])).toEqual(true)
    })

    test('input 3', () => {
        expect(hasOverlap([0, 5], [10, 15])).toEqual(false)
    })

    test('input 4', () => {
        expect(hasOverlap([13, 15], [1, 13])).toEqual(false)
    })
})
