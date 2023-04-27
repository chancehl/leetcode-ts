class Stack<T> {
    elements: T[]

    constructor(values: T[] = []) {
        this.elements = values
    }

    push(value: T) {
        this.elements.push(value)
    }

    pop(): T | null {
        return this.elements.pop() ?? null
    }

    peek(): T {
        return this.elements[this.elements.length - 1]
    }

    size(): number {
        return this.elements.length
    }

    toString(): string {
        return this.elements.join(',')
    }
}

export { Stack }
