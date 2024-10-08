var numberOfSpecialChars = function(word) {
    let set1 = new Set();
    let set2 = new Set();
    for(let char of word) {
     if(char >= 'a' && char <= 'z') {
         set1.add(char)
     }else if (char >= 'A' && char <= 'Z') {
         set2.add(char)
     }
    }
    let specialCount =0;
    for(let lowercase of set1){
     if(set2.has(lowercase.toUpperCase())) {
         specialCount++;
     }
    }
    return specialCount;
 };
 