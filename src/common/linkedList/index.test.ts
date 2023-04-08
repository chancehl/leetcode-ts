import { ListNode } from './index'

describe('listNode', () => {
    test('can create a linked list from a list of numbers', () => {
        expect(ListNode.from([1, 2, 3])).toEqual(new ListNode(1, new ListNode(2, new ListNode(3, null))))
    })

    test('can create a linked list from a list of numbers of size 1', () => {
        expect(ListNode.from([1])).toEqual(new ListNode(1, null))
    })
})
