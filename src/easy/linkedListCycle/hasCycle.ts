import { ListNode } from '@common/linkedList'

function hasCycle(head: ListNode | null): boolean {
    if (head == null) {
        return false
    }

    let visited = new Set<ListNode>()

    let current = head

    while (current.next) {
        if (visited.has(current)) {
            return true
        } else {
            visited.add(current)

            current = current.next
        }
    }

    return false
}

export { hasCycle }
