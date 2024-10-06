var checkInclusion = function(s1, s2) {
    let regexPattern = s1.split('').sort().join('|');
     
     let regex = new RegExp(`[${regexPattern}]{${s1.length}}`, 'g');
     
     if (s2.match(regex)) {
         return true;
     } else {
         return false;
     }
 };