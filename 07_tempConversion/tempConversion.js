const ftoc = function(temp) {

  let cel = (temp - 32) *5/9;
  celsius = Math.round(cel * 10) / 10

  return celsius

};

const ctof = function(temp) {

  let far = (temp*9/5) + 32;
  farenhiet = Math.round(far*10)/10;

  return farenhiet;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
