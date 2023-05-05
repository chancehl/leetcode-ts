import { canAttendMeetings } from './canAttendMeetings'

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
