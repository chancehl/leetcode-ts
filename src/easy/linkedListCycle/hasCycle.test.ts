import { describe, test, expect } from 'bun:test'

import { ListNode } from '@common/linkedList'
import { hasCycle } from './hasCycle'

describe('hasCycle', () => {
    test('input 1', () => {
        const head = new ListNode(3)
        const firstNode = new ListNode(2)
        const secondNode = new ListNode(0)
        const thirdNode = new ListNode(-4)

        head.next = firstNode
        firstNode.next = secondNode
        secondNode.next = thirdNode
        thirdNode.next = firstNode // here's the loop (3 -> 2 -> 0 -> -4 -> 2 -> 0 -> -4 -> 2 -> 0 -> -4, x Infinity)

        expect(hasCycle(head)).toEqual(true)
    })

    test('input 2', () => {
        const head = new ListNode(1)
        const firstNode = new ListNode(2)

        head.next = firstNode
        firstNode.next = head // infinite loop between the two (1 -> 2 -> 1 -> 2 -> 1 x Infinity)

        expect(hasCycle(head)).toEqual(true)
    })

    test('input 3', () => {
        expect(hasCycle(new ListNode(1, new ListNode(2, new ListNode(3))))).toEqual(false)
    })

    test('input 4', () => {
        expect(hasCycle(new ListNode(1))).toEqual(false)
    })
})
