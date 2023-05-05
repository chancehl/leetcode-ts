function romanToInt(s: string): number {
    let values: Record<string, number> = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    }

    let index = s.length
    let value = 0

    while (index >= 1) {
        let slice = s.slice(index - 2, index)

        if (values[slice]) {
            index = index - 2
            value += values[slice]
        } else {
            index = index - 1
            value += values[s[index]]
        }
    }

    return value
}

export { romanToInt }
