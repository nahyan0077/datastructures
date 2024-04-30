// let a = -1
// let b = 1

// for(let i=0;i<10;i++){
//     let c = a + b
//     console.log(c);
//     a = b
//     b = c
// }


// function lock(n) {
//     if(n<=1){
//         return 1;
//     }
//     lock(n-1)
//     console.log(n);
//     lock(n-1)
// }
// lock(5)

//factorial of a number------------------

// function fact(n) {
//     let sum = 1
//     for(let i=n;i>0;i--){
//         sum *= i
//     }
//     console.log(sum);
// }
// fact(5)


//check prime

// function checkPrime(n) {
//     if(n<=2){
//         return false
//     }
//     for(let i = 2; i < n; i++){
//         if(n % i == 0){
//             return false
//         }
//     }   
//     return true
// }
// console.log(checkPrime(5))

//------------

// function checkPrime(n) {
//     if(n<=2){
//         return false
//     }
//     for(let i = 2; i < Math.sqrt(n); i++){
//         if(n % i == 0){
//             return false
//         }
//     }   
//     return true
// }
// console.log(checkPrime(5))


// check the given number is power of 2

// function pwrOf2Check(n) {
//     if(n<1) return false
//     while (n>1) {
//         if(n%2!=0){
//             return false
//             break
//         }        
//         n = n / 2
//     }
//     return true
// }

// console.log(pwrOf2Check(34))

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Function to merge two linked lists
function mergeLinkedLists(list1, list2) {
    const mergedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 || current2) {
        if (!current1) {
            mergedList.append(current2.value);
            current2 = current2.next;
        } else if (!current2) {
            mergedList.append(current1.value);
            current1 = current1.next;
        } else {
            if (current1.value < current2.value) {
                mergedList.append(current1.value);
                current1 = current1.next;
            } else {
                mergedList.append(current2.value);
                current2 = current2.next;
            }
        }
    }
    return mergedList;
}


// Example usage:
const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new LinkedList();
list2.append(12);
list2.append(14);
list2.append(16);

const mergedList = mergeLinkedLists(list1, list2);
console.log("Merged List:");
mergedList.print();
