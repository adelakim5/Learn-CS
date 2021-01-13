var hasCycle = function (head) {
  let curr = head;
  let set = new Set();
  let i = 0;
  while (curr !== null) {
    if (set.has(curr.val)) return true;
    curr.val = `${i} ${curr.val}`;
    set.add(curr.val);
    curr = curr.next;
    i++;
  }
  return false;
};
