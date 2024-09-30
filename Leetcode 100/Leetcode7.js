// Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    let buy = Infinity; 
    let maxProfit = 0;  
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]; 
        } else {
            let profit = prices[i] - buy;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
};
