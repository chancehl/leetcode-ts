class TrieNode {
    val?: string | null

    end?: boolean

    children: Record<string, TrieNode>

    constructor(val?: string | null, children?: Record<string, TrieNode>, end?: boolean | null) {
        this.val = val ?? null
        this.children = children ?? {}
        this.end = end ?? false
    }

    insert(word: string): void {
        let node: TrieNode | null = this

        for (let i = 0; i < word.length; i++) {
            let character = word[i]

            if (!node.children[character]) {
                node.children[character] = new TrieNode(character)
            }

            node = node.children[character]

            if (i === word.length - 1) {
                node.end = true
            }
        }
    }

    search(word: string): boolean {
        let node: TrieNode | null = this

        for (let i = 0; i < word.length; i++) {
            let character = word[i]

            if (node.children[character]) {
                node = node.children[character]
            } else {
                return false
            }
        }

        return true
    }
}

export { TrieNode }
