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
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if (!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
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
        this.collectWord(node,word,list)
        return list
    }
    collectWord(node,word,list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWord(node.children[char],word + char,list)
        }
    }
}

const tr = new Trie()

tr.insert("nahyan")
tr.insert("nadfgad")
tr.insert("naghsrsr")

console.log(tr.search("nahyan"));

console.log(tr.autoCompleate("na"))