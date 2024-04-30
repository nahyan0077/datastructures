class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word){
        for(let i = 0; i < word.length; i++ ){
            let node = this.root
            for(let j = i; j < word.length; j++){
                if(!node.children[word[j]]){
                    node.children[word[j]] = new TrieNode()
                }
                node = node.children[word[j]]
            }
            node.isEnd = true
        }
    }

    collectWord(node,word,list){
        if (node.isEnd) {
            list.push(word)
        }
        for(let char in node.children){
            this.collectWord(node.children[char], word + char, list)
        }
    }


    print(){
        let words = []
        this.collectWord(this.root,"",words)
        return words
    }
}

const sf = new SuffixTrie()

sf.insert("nahyan")
sf.insert("nabhan")
sf.insert("nabeel")


console.log(sf.print())