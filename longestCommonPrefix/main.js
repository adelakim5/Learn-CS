var longestCommonPrefix = function (strs) {
  if (strs.length <= 1) return !strs.length ? "" : strs[0];
  let result = "";
  for (let i = 1; i < strs.length; i++) {
    if (i === 1) result = strs[i - 1].length < strs[i].length ? getCommon(strs[i - 1], strs[i]) : getCommon(strs[i], strs[i - 1]);
    else result = result.length < strs[i].length ? getCommon(result, strs[i]) : getCommon(strs[i], result);
    if (result === "") break;
  }
  return result;
};

function getCommon(word1, word2) {
  let str = "";
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) str += word1[i];
    else break;
  }
  return str;
}
