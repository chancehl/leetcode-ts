class ListNode {
    val: number

    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }

    static from(list: number[]): ListNode {
        let linkedList = new ListNode(list[0])

        let curr = linkedList

        for (const number of list.slice(1)) {
            const newNode = new ListNode(number)

            curr.next = newNode
            curr = newNode
        }

        return linkedList
    }

    toArray(): number[] {
        let current: ListNode | null = this

        let elements = []

        while (current != null) {
            elements.push(current.val)

            current = current.next
        }

        return elements
    }
}

export { ListNode }
