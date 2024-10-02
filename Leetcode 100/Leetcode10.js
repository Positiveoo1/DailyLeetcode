//45. Jump Game II
var jump = function(nums) {
    let jumps = 0;    
    let farthest = 0;  
    let end = 0;       
                                                                
    for (let i = 0; i < nums.length - 1; i++) { // loop till second-last element
        farthest = Math.max(farthest, i + nums[i]); // update the farthest point reachable
        
        if (i === end) {  
            jumps++;      // increment the jump count
            end = farthest; // set the new end to the farthest point reached
            
            if (end >= nums.length - 1) { 
                break; 
            }
        }
    }
    
    return jumps; 
};
