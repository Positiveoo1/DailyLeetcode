//69. Sqrt(x) EASY
var mySqrt = function(x) {
    if (x < 0 || isNaN(x)) return NaN;  
    if (x === 0) return 0; 
  
    let sqrt = x / 2;  
    let temp = 0;  
  
    while (Math.abs(sqrt - temp) > 1e-7) { 
      temp = sqrt;
      sqrt = (x / sqrt + sqrt) / 2;
    }
  
    return Math.floor(sqrt);
  };