const fibonacci = function(n) {
    num = parseInt(n);
    let total=0;
    let fib=[0,1];
    if(n<0)
    return 'OOPS';
    else {
        for(let i=2;i<=num;i++){
            fib[i] = fib[i-1]+fib[i-2]; 
        }
        return fib[num];
    }

};

// Do not edit below this line
module.exports = fibonacci;
