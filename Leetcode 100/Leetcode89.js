//2938. Separate Black and White Balls MEDIUM
var minimumSteps = function(s) {
    let ans = 0;
      let cnt = 0;
      let n = s.length;
      for (let i = n - 1; i >= 0; --i) {
        if (s[i] === '1') {
          ++cnt;
          ans += n - i - cnt;
        }
      }
      return ans;
  };