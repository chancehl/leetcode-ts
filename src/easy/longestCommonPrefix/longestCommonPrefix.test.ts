import { longestCommonPrefix } from './longestCommonPrefix'

describe('longestCommonPrefix', () => {
    test('input 1', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
    })

    test('input 2', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
    })

    test('input 3', () => {
        expect(longestCommonPrefix(['ab', 'a'])).toEqual('a')
    })

    test('input 3', () => {
        expect(longestCommonPrefix(['', 'b'])).toEqual('')
    })
})
