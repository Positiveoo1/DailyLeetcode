//2406. Divide Intervals Into Minimum Number of Groups MEDIUM
var minGroups = function(intervals) {
    let events = [];
    
    for (let [start, end] of intervals) {
        events.push([start, 1]); 
        events.push([end + 1, -1]);  
    }
    
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let maxGroups = 0;
    let currentGroups = 0;
    
    for (let [time, type] of events) {
        currentGroups += type; 
        maxGroups = Math.max(maxGroups, currentGroups);
    }
    
    return maxGroups;
};
