var isIsomorphic = function(s, t) {
    let map = new Map();
    let regex = /[a-z]/g;
    if(s.length === t.length && regex.test(s) ) {
        for(let i = 0; i < s.length; i++) {
            if(!map.has(s[i])) {
                map.set(s[i], t[i]);
            } else if(map.get(s[i])!== t[i]) {
                return false;
            }
        }
        return true;
    }
};