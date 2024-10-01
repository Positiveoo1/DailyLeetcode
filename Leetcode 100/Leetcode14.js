/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let currentGas = 0;
    let start = 0;
    
    for (let i = 0; i < gas.length; i++) {
        let balance = gas[i] - cost[i];
        totalGas += balance;  
        currentGas += balance; 
        
        if (currentGas < 0) {
            start = i + 1;      
            currentGas = 0;     
        }
    }
    
    if (totalGas < 0) {
        return -1;
    }
    
    return start;
};
