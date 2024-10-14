//2530. Maximal Score After Applying K Operations  MEDIUM
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper functions for max-heap
    insert(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return max;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] >= this.heap[index]) break;
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
            index = parentIdx;
        }
    }

    _bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let swapIdx = null;

            if (leftChildIdx < length && this.heap[leftChildIdx] > this.heap[index]) {
                swapIdx = leftChildIdx;
            }
            if (rightChildIdx < length && this.heap[rightChildIdx] > (swapIdx === null ? this.heap[index] : this.heap[leftChildIdx])) {
                swapIdx = rightChildIdx;
            }

            if (swapIdx === null) break;
            [this.heap[index], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[index]];
            index = swapIdx;
        }
    }
}

var maxKelements = function (nums, k) {
    let score = 0;
    let heap = new MaxHeap();
    for(let num of nums) {
        heap.insert(num)
    }
        for (let i = 0; i < k; i++) {
        let maxElement = heap.extractMax();
        score += maxElement;
        let newElement = Math.ceil(maxElement / 3);
        heap.insert(newElement);
    }
    
    return score;
  
};