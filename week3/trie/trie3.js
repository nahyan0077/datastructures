class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}
class prefixTrie {
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
    autoCompleat(word){
        let node = this.root
        for (const char of word) {
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
        for (const char in node.children) {
            this.collectWords(node.children[char],word + char,list)
        }
    }
}

const pt = new prefixTrie()

pt.insert("annual")
pt.insert("animal")
pt.insert("ancestor")
pt.insert("nahyan")

console.log(pt.search("annual"));

console.log(pt.autoCompleat("an"));