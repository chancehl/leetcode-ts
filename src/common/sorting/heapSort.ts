import { MaxHeap } from '@common/heap'

export function heapSort(arr: number[]): number[] {
    const heap = new MaxHeap()

    for (const value of arr) {
        heap.add(value)
    }

    let values: number[] = []

    while (heap.items.length > 0) {
        let number = heap.remove()

        if (number !== null) {
            values.push(number)
        }
    }

    return values
}
