const repeatString = function(str,num) {
    let str1="";

    if(num<0){
        return 'ERROR';
    }
    else {
    for(let i=0;i<num;i++)
    {
        str1+=str;
        
    }
    }
    return str1;
};

// Do not edit below this line
module.exports = repeatString;
