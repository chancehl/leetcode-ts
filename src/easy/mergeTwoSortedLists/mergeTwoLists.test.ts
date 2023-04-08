import { ListNode } from '@common/linkedList'

import { mergeTwoLists } from './mergeTwoLists'

describe('mergeTwoLists', () => {
    test('input 1', () => {
        expect(mergeTwoLists(ListNode.from([1, 2, 4]), ListNode.from([1, 3, 4]))).toEqual(ListNode.from([1, 1, 2, 3, 4, 4]))
    })

    test('input 2', () => {
        expect(mergeTwoLists(null, null)).toEqual(null)
    })

    test('input 3', () => {
        expect(mergeTwoLists(null, new ListNode(0, null))).toEqual(new ListNode(0, null))
    })
})
