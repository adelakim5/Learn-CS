var addTwoNumbers = function (l1, l2) {
  let answer = new ListNode();
  let current = answer;
  let [curr1, curr2] = [l1, l2];
  let [carry, sum] = [0, 0];
  while (true) {
    [carry, sum] = getValue(curr1 ? curr1.val : 0, curr2 ? curr2.val : 0, carry);
    current.next = new ListNode(sum);
    current = current.next;
    if (curr1) curr1 = curr1.next;
    if (curr2) curr2 = curr2.next;
    if (!curr1 && !curr2) {
      if (carry > 0) current.next = new ListNode(carry);
      break;
    }
  }
  return answer.next;
};

function getValue(num1, num2, carry) {
  let result = (num1 + num2 + carry).toString();
  return result.length >= 2 ? [+result[0], +result[1]] : [0, +result];
}
