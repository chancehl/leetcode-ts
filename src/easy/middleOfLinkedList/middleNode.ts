import { ListNode } from '@common/linkedList'

function middleNode(head: ListNode | null): ListNode | null {
    let elements: (ListNode | null)[] = []

    // if this is a single node, just return that node
    if (head?.next == null) {
        return head
    }

    let current: ListNode | null = head

    while (current != null) {
        elements.push(current)

        current = current.next
    }

    const mid = elements.length % 2 === 0 ? elements.length / 2 : Math.floor(elements.length / 2)

    return elements[mid]
}

export { middleNode }
