class Stack<T> {
    elements: T[]

    constructor(values: T[] = []) {
        this.elements = values
    }

    push(value: T) {
        this.elements.push(value)
    }

    pop(): T | undefined {
        return this.elements.pop()
    }

    peek(): T {
        return this.elements[this.elements.length - 1]
    }

    toString(): string {
        return this.elements.join(',')
    }
}

export { Stack }
