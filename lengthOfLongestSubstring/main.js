var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let obj = {};
    obj[s[i]] = s[i];
    let temp = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (obj.hasOwnProperty(s[j])) {
        break;
      } else {
        temp += s[j];
        obj[s[j]] = s[j];
      }
      max = max < temp.length ? temp.length : max;
    }
  }
  return max;
};
