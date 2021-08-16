class TrieNode {
    constructor () {
        this.isEnd = false;
        this.childrens = new Map();
    }
}

class Trie {
    constructor () {
        this.root = new TrieNode();
    }

    insert (word, node = this.root) {
        if (word.length === 0) {
            node.isEnd = true;
            return;
        } else if (node.childrens.has(word.charAt(0)) === false) {
            node.childrens.set(word.charAt(0), new TrieNode());
            this.insert(word.substring(1), node.childrens.get(word.charAt(0)));
        } else {
            this.insert(word.substring(1), node.childrens.get(word.charAt(0)));
        }
    }

    search (word, node = this.root) {
        if (word.length === 0 && node.isEnd) return true;
        else if (word.length === 0) return false;
        else if (node.childrens.has(word.charAt(0)) === false) return false;
        else return this.search(word.substring(1), node.childrens.get(word.charAt(0)));
    }

    startsWith (prefix, node = this.root) {
        if (prefix.length === 0) return true;
        else if (node.childrens.has(prefix.charAt(0)) === false) return false;
        else return this.startsWith(prefix.substring(1), node.childrens.get(prefix.charAt(0)));
    }
}

module.exports = { Trie, TrieNode };