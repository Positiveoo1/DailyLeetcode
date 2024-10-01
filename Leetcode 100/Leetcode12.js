class RandomizedSet {
    constructor() {
        this.map = new Map(); // to store value -> index
        this.list = [];       // to store values
    }
    
    /**
     * Inserts a value into the set. Returns true if the value did not already exist, false otherwise.
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }
        this.list.push(val);           // Add the value at the end of the list
        this.map.set(val, this.list.length - 1); // Map the value to its index
        return true;
    }
    
    /**
     * Removes a value from the set. Returns true if the value existed, false otherwise.
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }
        const index = this.map.get(val);
        const lastElement = this.list[this.list.length - 1];
        
        // Move the last element to the place of the element to delete
        this.list[index] = lastElement;
        this.map.set(lastElement, index); // Update the index of the last element
        
        // Remove the last element
        this.list.pop();
        this.map.delete(val);  // Remove the element from the map
        
        return true;
    }
    
    /**
     * Get a random element from the set.
     * @return {number}
     */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}
