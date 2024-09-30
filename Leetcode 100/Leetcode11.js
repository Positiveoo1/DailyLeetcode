var hIndex = function(citations) {
    let sorted =  citations.sort((a,b) => b - a);
    let index = 0
     for(let i = 0; i < sorted.length; i ++) {
         if(sorted[i] >= index + 1){
             index++;
         }else {
             break;
         }
     }
     return index;
 };