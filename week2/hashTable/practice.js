// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKeyItem = bucket.find(item => item[0] == key)
//             if (sameKeyItem) {
//                 sameKeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     remove(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameKeyItem = bucket.find(item => item[0] == key)
//             if (sameKeyItem) {
//                 bucket.splice(bucket.indexOf(sameKeyItem),1)
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const hash = new HashTable(5)

// hash.set("name","arya")
// hash.set("man","nahyan")
// hash.set("age",24)
// hash.set("height",160)

// hash.display()



class HashTable {
    constructor(size) {
        this.table = []
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = bucket.find(item => item[0] == key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return null
    }
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key)
            if (sameKeyItem) {
                let rmvEle = sameKeyItem[1]
                bucket.splice(bucket.indexOf(sameKeyItem),1)
                return rmvEle
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }          
        }
    }
}

const hash = new HashTable(10)

hash.set("name","aju")
hash.set("age",23)
hash.set("place","calicut")
hash.display()