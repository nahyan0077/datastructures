function indirect(n) {
    if(n<=0){
        return 0
    }
    if (n%2==0) {
        console.log(n-1);
    }else{
        console.log(n+1);
    }
    
    return indirect(n-1)
}

console.log(indirect(10));