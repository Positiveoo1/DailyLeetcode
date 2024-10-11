//1942. The Number of the Smallest Unoccupied ChairMEDIUM
var smallestChair = function(times, targetFriend) {
    let n = times.length;
    let events = [];
    
    for (let i = 0; i < n; i++) {
        let [arrivali, leavingi] = times[i];
        events.push([arrivali, i, 'arrival']);  // Arrival event
        events.push([leavingi, i, 'departure']); // Departure event
    }
    
    events.sort((a, b) => {
        if (a[0] === b[0]) return a[2] === 'departure' ? -1 : 1;
        return a[0] - b[0];
    });

    let availableChairs = new MinPriorityQueue();
    for (let i = 0; i < n; i++) availableChairs.enqueue(i);
    
    let chairMap = new Map();
    
    for (let [time, friend, type] of events) {
        if (type === 'arrival') {
            let chair = availableChairs.dequeue().element;
            chairMap.set(friend, chair);
            if (friend === targetFriend) return chair;  
        } else if (type === 'departure') {
            let chair = chairMap.get(friend);
            availableChairs.enqueue(chair);
        }
    }
};
