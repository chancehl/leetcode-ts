import { describe, test, expect } from 'bun:test'

import { TrieNode } from './index'

describe('TrieNode', () => {
    test('can insert string', () => {
        let root = new TrieNode()

        root.insert('test')
        root.insert('team')
        root.insert('tree')

        expect(root).toEqual(
            new TrieNode(null, {
                t: new TrieNode('t', {
                    e: new TrieNode('e', { a: new TrieNode('a', { m: new TrieNode('m', {}, true) }), s: new TrieNode('s', { t: new TrieNode('t', {}, true) }) }),
                    r: new TrieNode('r', { e: new TrieNode('e', { e: new TrieNode('e', {}, true) }) }),
                }),
            }),
        )
    })

    test('can search for string', () => {
        let root = new TrieNode()

        root.insert('test')
        root.insert('team')

        expect(root.search('test')).toEqual(true)
        expect(root.search('team')).toEqual(true)
        expect(root.search('tree')).toEqual(false)
        expect(root.search('chance')).toEqual(false)
    })
})
