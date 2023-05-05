import { backspaceCompare } from './backspaceCompare'

describe('backspaceCompare', () => {
    test('input 1', () => {
        expect(backspaceCompare('ab#c', 'ad#c')).toEqual(true)
    })

    test('input 2', () => {
        expect(backspaceCompare('ab##', 'c#d#')).toEqual(true)
    })

    test('input 3', () => {
        expect(backspaceCompare('a#c', 'b')).toEqual(false)
    })

    test('input 4', () => {
        expect(backspaceCompare('xywrrmp', 'xywrrmu#p')).toEqual(true)
    })
})
