const reverseString = function(str) {
    let strl = str.length - 1;
    let nstr = '';
    for(let i=strl;i>=0;i--){
        nstr+= str[i];
    }
    return nstr;

};

// Do not edit below this line
module.exports = reverseString;
