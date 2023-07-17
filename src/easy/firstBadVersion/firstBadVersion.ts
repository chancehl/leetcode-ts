// This one uses this god awful format instead of just a function because it needs access to the "isBadVersion" API. Dumb question, dumb format.
var solution = function (isBadVersion: (n: number) => boolean) {
    return function (n: number): number {
        let left = 0
        let right = n

        while (left < right) {
            let mid = Math.floor((left + right) / 2)

            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left
    }
}
