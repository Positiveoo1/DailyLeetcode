//141. Linked List Cycle EASY
var hasCycle = function(head) {
    if (head === null || head.next === null) {
  return false;
}
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast ){
          return true
      }
      
  }
  return false
};