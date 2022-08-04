const removeFromArray = function(arr, ...theArgs) {

    let newarr = arr.filter( val => !theArgs.includes(val) )
          return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
