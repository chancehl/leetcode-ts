export function euclidianDistance(a: [number, number], b: [number, number]): number {
    const [aX, aY] = a
    const [bX, bY] = b

    return Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2))
}
