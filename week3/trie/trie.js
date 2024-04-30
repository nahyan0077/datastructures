class TrieNode {   
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }
    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    printWords(node = this.root, currentWord = "", result = []) {
        if (node.isEndOfWord) {
            result.push(currentWord)
        }
        for (let char in node.children) {
            this.printWords(node.children[char], currentWord + char, result)
        }
        return result
    }
    
    autoComplete(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        let list = [];
        this.collectWord(node, word, list);
        return list;
    }

    collectWord(node, word, list) {
        if (node.isEndOfWord) {
            list.push(word);
        }
        for (let char in node.children) {
            this.collectWord(node.children[char], word + char, list);
        }
    }
    insertSuff(word) {
        for (let i = 0; i < word.length; i++) {
            let currentNode = this.root;
            for (let j = i; j < word.length; j++) {
                const char = word[j];
                if (!currentNode.children[char]) {
                    currentNode.children[char] = new TrieNode();
                }
                currentNode = currentNode.children[char];
            }
            currentNode.isEndOfWord = true;
        }
    }

    searchSuff(suffix) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }
}

const trie = new Trie()

// trie.insert("nahyan")
// trie.insert("nahoo")
// trie.insert("apple")
// trie.insert("upper")
trie.insertSuff("banana");
trie.insertSuff("nahyan");

console.log(trie.searchSuff("ana"));
console.log(trie.searchSuff("yan"));
// console.log(trie.root.children.b.children.a.children);

// console.log(trie.search("nahyan"));

// console.log(trie.autoComplete("nah"))
// console.log(trie);


// console.log(trie.printWords())