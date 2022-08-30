const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    let str2 = str.split("").reverse().join("");
    str = str.toLowerCase();
    str2 = str2.toLowerCase();

    if(str === str2)
        return true;
        else
        return false;


};

// Do not edit below this line
module.exports = palindromes;
