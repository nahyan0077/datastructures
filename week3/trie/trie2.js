class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
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
        currNode.isEnd = true
    }
    search(word){
        let currNode = this.root
        for(let char of word){
            if (!currNode.children[char]) {
                return false
            }
            currNode = currNode.children[char]
        }
        return currNode.isEnd
    }
    autoCompleat(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }
        let list = []
        this.collectWord(node,word,list)
        return list
    }
    collectWord(node,word,list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWord(node.children[char],word+char,list)
        }
    }
}

const trie = new Trie()

trie.insert("ajmtyerty")
trie.insert("ajmertyer")
trie.insert("ajmrgfhdfg")
trie.insert("arrow")
trie.insert("army")
trie.insert("arc")
console.log(trie.search("ajmal"));
console.log(trie.autoCompleat("ar"));
console.log(trie);