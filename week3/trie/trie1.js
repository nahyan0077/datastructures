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
    insert(word){
        let currNode = this.root
        for(let char of word){
            if (!currNode.children[char]) {
                currNode.children[char] = new TrieNode()
            }
            currNode = currNode.children[char]
        }
        currNode.isEndOfWord = true
    }
    search(word){
        let currNode = this.root
        for(let char of word){
            if (!currNode.children[char]) {
                return false
            }
            currNode = currNode.children[char]
        }
        return currNode.isEndOfWord
    }
    autoCompleate(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectWords(node, word, list)
        return list
    }
    collectWords(node,word,list){
        if (node.isEndOfWord) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],word+char,list)
        }
    }
}

const trie = new Trie()

trie.insert("apple")
trie.insert("apper")
trie.insert("nahyan")
trie.insert("nayhan")

console.log(trie.search("apple"));

console.log(trie.autoCompleate("app"));

console.log(trie);