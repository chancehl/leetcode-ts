function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const startingColor = image[sr][sc]

    let visited = new Array(image.length).fill([]).map(() => new Array(image[0].length).fill(false))

    fill(image, sr, sc, color, startingColor, visited)

    return image
}

function fill(image: number[][], row: number, col: number, color: number, startingColor: number, visited: boolean[][]): void {
    if (visited[row][col]) {
        return
    } else {
        image[row][col] = color
        visited[row][col] = true
    }

    // recurse up
    if (image[row - 1] != null && image[row - 1][col] === startingColor) {
        fill(image, row - 1, col, color, startingColor, visited)
    }

    // recurse down
    if (image[row + 1] != null && image[row + 1][col] === startingColor) {
        fill(image, row + 1, col, color, startingColor, visited)
    }

    // recurse left
    if (image[row][col - 1] != null && image[row][col - 1] === startingColor) {
        fill(image, row, col - 1, color, startingColor, visited)
    }

    // recurse right
    if (image[row][col + 1] != null && image[row][col + 1] === startingColor) {
        fill(image, row, col + 1, color, startingColor, visited)
    }
}

export { floodFill }
