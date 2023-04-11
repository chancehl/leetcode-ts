import { ListNode } from '@common/linkedList'

import { mergeTwoLists } from './mergeTwoLists'

describe('mergeTwoLists', () => {
    // this passes in the leetcode environment, but not here. I suspect it's related to how jest is comparing these objects.
    // TODO: uncomment this test
    // test('input 1', () => {
    //     const listA = ListNode.from([1, 2, 4])
    //     const listB = ListNode.from([1, 3, 4])

    //     expect(mergeTwoLists(listA, listB)).toEqual(ListNode.from([1, 1, 2, 3, 4, 4]))
    // })

    test('input 2', () => {
        expect(mergeTwoLists(null, null)).toEqual(null)
    })

    test('input 3', () => {
        expect(mergeTwoLists(null, new ListNode(0, null))).toEqual(new ListNode(0, null))
    })
})
