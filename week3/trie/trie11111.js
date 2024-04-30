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
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }
    search(word){
        let node = this.root
        for(let char in word){
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
        this.collectWords(node,word,list)
        return list
    }
    collectWords(node,word,list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],word+char,list)
        }
    }
    print(){
        let words = []
        this.collectWords(this.root,"",words)
        return words
    }
}

const tr = new Trie()

tr.insert("nahyan")
tr.insert("nabeel")
tr.insert("nasban")
tr.insert("thakku")
tr.insert("thansi")

console.log(tr.autoCompleate("th"));

console.log(tr.print());