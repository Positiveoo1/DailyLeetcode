// 2. Add Two Numbers Medium
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    var curr;
    let p = (curr = new ListNode(0));
    var sum = 0;
    while (l1 || l2) {

        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + carry;
            l1 = l1.next;
        } else if (l2) {
            sum = l2.val + carry;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = Math.floor(sum) % 10;
        curr.next = new ListNode(sum);
        curr = curr.next;

    }

    if (carry === 1)
        curr.next = new ListNode(carry);
    return p.next;
};