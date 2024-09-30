var merge = function(nums1, m, nums2, n) {
    // Pointers for nums1, nums2, and the last position in nums1
    let p1 = m - 1;  // Last non-zero element in nums1
    let p2 = n - 1;  // Last element in nums2
    let p = m + n - 1;  // Last position in nums1

    // Merge from the back to the front
    while (p1 >= 0 && p2 >= 0) {
        // Compare and put the larger element at the end
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];  // Put nums1[p1] at nums1[p]
            p1--;  // Move pointer in nums1
        } else {
            nums1[p] = nums2[p2];  // Put nums2[p2] at nums1[p]
            p2--;  // Move pointer in nums2
        }
        p--;  // Move pointer for merged array
    }

    // If there are any remaining elements in nums2, copy them over
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
};