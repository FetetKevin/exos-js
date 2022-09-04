const ftoc = function(far) {
    cel = (far - 32) * (5/9)
    if(cel != 0) {
      cel = cel.toFixed(1)
    }
    return parseFloat(cel)
};

const ctof = function(cel) {
    far = (cel) / (5/9) + 32
    if(far != 0) {
      far = far.toFixed(1)
    }
    return parseFloat(far)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
