const { expect, describe, it } = require('@jest/globals');
const { Trie } = require('./index');

describe('Trie', () => {
    it ('Add node', () => {
        const trie = new Trie();

        trie.insert('dog');

        expect(trie.search('dog')).toBeTruthy();
    });
    
    it ('Should return false if can not find', () => {
        const trie = new Trie();

        expect(trie.search('cart')).toBeFalsy();
    });
    
    it ('Should return true if can not find word', () => {
        const trie = new Trie();

        trie.insert('cart');

        expect(trie.search('cart')).toBeTruthy();
    });
    
    it ('Should return false if can not find prefix', () => {
        const trie = new Trie();

        trie.insert('cart');

        expect(trie.startsWith('dart')).toBeFalsy();
    });
    
    it ('Should return true if can find prefix', () => {
        const trie = new Trie();

        trie.insert('introspection');

        expect(trie.startsWith('intro')).toBeTruthy();
    });
});