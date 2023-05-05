function canAttendMeetings(intervals: number[][]): boolean {
    if (intervals.length <= 1) {
        return true
    }

    const sorted = intervals.sort((a, b) => {
        const [aStart] = a
        const [bStart] = b

        return aStart < bStart ? -1 : 1
    })

    for (let i = 0; i < sorted.length - 1; i++) {
        let [_, currentEnd] = sorted[i]
        let [nextStart] = sorted[i + 1]

        if (nextStart < currentEnd) {
            return false
        }
    }

    return true
}

export { canAttendMeetings }
