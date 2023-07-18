import { MaxHeap } from './maxHeap'

describe('max heap', () => {
    test('can add several values to the heap', () => {
        const heap = new MaxHeap()

        heap.add(3)
        heap.add(4)
        heap.add(31)
        heap.add(6)

        expect(heap.items).toEqual([31, 6, 4, 3])
    })

    test('can add several values to the heap - input 2', () => {
        const heap = new MaxHeap()

        heap.add(4)
        heap.add(10)
        heap.add(3)
        heap.add(5)
        heap.add(1)

        expect(heap.items).toEqual([10, 5, 3, 4, 1])
    })

    test('can remove values from the heap', () => {
        const heap = new MaxHeap()

        heap.add(3)
        heap.add(4)
        heap.add(31)
        heap.add(6)

        expect(heap.remove()).toEqual(31)
        expect(heap.items).toEqual([6, 3, 4])
        expect(heap.remove()).toEqual(6)
        expect(heap.items).toEqual([4, 3])
        expect(heap.remove()).toEqual(4)
        expect(heap.items).toEqual([3])
        expect(heap.remove()).toEqual(3)
        expect(heap.items).toEqual([])
    })
})
