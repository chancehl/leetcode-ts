import { ListNode } from '@common/linkedList'

function reverseList(head: ListNode | null): ListNode | null {
    let previous: ListNode | null = null
    let current: ListNode | null = head

    while (current != null) {
        const temp = current.next

        current.next = previous
        previous = current

        current = temp
    }

    return previous
}

export { reverseList }
