var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let counter = {};
    for (let c of s) {
        if (counter[c]) {
            counter[c] += 1;
        } else {
            counter[c] = 1;
        }
    }

   
    for (let c of t) {
        if (!counter[c]) {
            return false; 
        }
        counter[c] -= 1;
    }

    for (let key in counter) {
        if (counter[key] !== 0) {
            return false;
        }
    }

    return true;
};
