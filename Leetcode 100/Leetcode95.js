//2706. Buy Two Chocolates EASY
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);

const total_price = prices[0] + prices[1];

if (total_price <= money) {
    return money - total_price;  
} else {
    return money;  
}
};