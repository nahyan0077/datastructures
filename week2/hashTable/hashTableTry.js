class HasHTable {
    constructor(size) {
        this.table = new Array(size)
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
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0]==key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key)
            let x = sameKeyItem[1]
            bucket.splice(bucket.indexOf(sameKeyItem),1)
            return x
        }
        return undefined
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const hash = new HasHTable(25)

hash.set("name","jazz")
hash.set("namee","vishnu_gr")
hash.set("nameee","subin")

console.log(hash.remove("name"))
hash.display()

