//49. Group Anagrams MEDIUM
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let str of strs) {
        const sorted = str.split("").sort().join("");
        if(!map.has(sorted))  {
            map.set(sorted, [str]);
        }else {
            map.get(sorted).push(str);
        }
    }
     return Array.from(map.values());
    };