import { TrieNode } from '@common/trie'

function longestCommonPrefix(strs: string[]): string {
    let trie = new TrieNode()

    for (const str of strs) {
        if (str === '') {
            return ''
        } else {
            trie.insert(str)
        }
    }

    let current = trie
    let prefix = ''

    while (Object.keys(current.children).length === 1) {
        let [key] = Object.keys(current.children)

        if (current.end) {
            return prefix
        } else {
            prefix = prefix + key
            current = current.children[key]
        }
    }

    return prefix
}

export { longestCommonPrefix }
