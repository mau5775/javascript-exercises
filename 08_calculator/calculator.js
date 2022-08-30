const add = function(...args) {
	let total =0;
  for(let i=0;i<args.length;i++){
    total+=args[i];
    }
    return total;
};

const subtract = function(...args) {
	let total = args[0];
  for(let i=1;i<args.length;i++){
    total= total - args[i];
    }
    
    return total;
};

const sum = function(...args) {

  let total =0;
  let arrayArgs = args[0];
  
  for(let i=0;i<arrayArgs.length;i++){
    total+=arrayArgs[i];
    }
  
    return total;
	
};

const multiply = function(...args) {
  let total=1;
  let fargs = args[0];

  for(let i=0;i<fargs.length;i++){
    total = total*fargs[i];
  }
  return total;
};

const power = function(...args) {
	let total = 0;
  total = Math.pow(args[0],args[1]);
  return total;
};

const factorial = function(a) {
  let total = 1;
  if(a===0){
    return 1;
  }
  else {
    for(let i=1;i<=a;i++){
      total*=i;
    }
    return total;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
