// Remove Duplicates from Sorted List EASY
var deleteDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next) {
      if (curr.val === curr.next.val) {
        curr.next = curr.next.next; // skip duplicate
      } else {
        curr = curr.next; // move to next non-duplicate element
      }
    }
    return head;
  };
  