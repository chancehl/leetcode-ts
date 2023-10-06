import { describe, test, expect } from 'bun:test'

import { ListNode } from '@common/linkedList'

import { middleNode } from './middleNode'

describe('middleNode', () => {
    test('input 1', () => {
        const root = new ListNode(1)
        const two = new ListNode(2)
        const three = new ListNode(3)
        const four = new ListNode(4)
        const five = new ListNode(5)

        five.next = null
        four.next = five
        three.next = four
        two.next = three
        root.next = two

        expect(middleNode(root)).toEqual(three)
    })

    test('input 2', () => {
        const root = new ListNode(1)
        const two = new ListNode(2)
        const three = new ListNode(3)
        const four = new ListNode(4)
        const five = new ListNode(5)
        const six = new ListNode(6)

        six.next = null
        five.next = six
        four.next = five
        three.next = four
        two.next = three
        root.next = two

        expect(middleNode(root)).toEqual(four)
    })

    test('input 3', () => {
        const root = new ListNode(1)

        expect(middleNode(root)).toEqual(root)
    })

    test('input 4', () => {
        const root = new ListNode(1)
        const two = new ListNode(2)

        two.next = null
        root.next = two

        expect(middleNode(root)).toEqual(two)
    })
})
