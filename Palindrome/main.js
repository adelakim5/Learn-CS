var isPalindrome = function (x) {
  if (x < 0) return false;
  x = x.toString();
  const mid = Math.floor(x.length / 2);
  if (x.length % 2) {
    // 홀수
    for (let i = 0; i < mid; i++) {
      if (x[i] !== x[x.length - 1 - i]) return false;
    }
  } else {
    // 짝수
    for (let i = 0; i <= mid; i++) {
      if (x[i] !== x[x.length - 1 - i]) return false;
    }
  }
  return true;
};
