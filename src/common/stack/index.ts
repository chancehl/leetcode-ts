class Stack<T> {
    values: T[]

    constructor(values: T[] = []) {
        this.values = values
    }

    push(value: T) {
        this.values.push(value)
    }

    pop(): T | undefined {
        return this.values.pop()
    }

    peek(): T {
        return this.values[this.values.length - 1]
    }
}

export { Stack }
