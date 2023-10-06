import { describe, test, expect } from 'bun:test'

import { ListNode } from '@common/linkedList'

import { reverseList } from './reverseList'

describe('reverseList', () => {
    test('input 1', () => {
        const result = reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))

        expect(result?.toArray()).toEqual([5, 4, 3, 2, 1])
    })

    test('input 2', () => {
        expect(reverseList(new ListNode(1, new ListNode(2)))?.toArray()).toEqual([2, 1])
    })
})
