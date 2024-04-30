class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}
class suffixTrie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word){
        for(let i = 0; i<word.length; i++){
            let node = this.root
            for(let j = i ; j < word.length; j++){
                if (!node.children[word[j]]) {
                    node.children[word[j]] = new TrieNode()
                }
                node = node.children[word[j]]
            }
            node.isEnd = true
        }
    }
    search(word){
        for(let i = 0; i<word.length; i++){
            let node = this.root
            for(let j = i ; j < word.length; j++){
                if (!node.children[word[j]]) {
                    return false
                }
                node = node.children[word[j]]
            }
            return node.isEnd
        }   
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

const tr = new suffixTrie()

tr.insert("nahyan")
tr.insert("nabeel")
tr.insert("nasban")
tr.insert("thakku")
tr.insert("thansi")

console.log(tr.search("yan"));

console.log(tr.print());