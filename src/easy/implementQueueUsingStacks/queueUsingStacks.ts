import { Stack } from '@common/stack'

class MyQueue {
    private overflowStack = new Stack<number>()
    private stack = new Stack<number>()

    constructor(elements?: number[]) {
        this.stack.elements = elements ?? []
    }

    getElements(): number[] {
        return this.stack.elements
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        // move all values from the stack into the overflow stack
        while (this.stack.elements.length) {
            let next = this.stack.pop()

            if (next) {
                this.overflowStack.push(next)
            }
        }

        let returnedValue = this.overflowStack.pop()

        // move all values from the overflow stack back into the regular stack
        while (this.overflowStack.elements.length) {
            let next = this.overflowStack.pop()

            if (next) {
                this.stack.push(next)
            }
        }

        if (returnedValue == null) {
            return NaN
        }

        return returnedValue
    }

    peek(): number {
        return this.stack.elements[0] ?? NaN
    }

    empty(): boolean {
        return this.stack.elements.length === 0
    }
}

export { MyQueue }
