// 원래
var twoSum = function (nums, target) {
  let result = [];
  comb(nums, target, [], 0, result);
  return result;
};

function comb(nums, target, res, idx, result) {
  if (res.length === 2) {
    const temp = res.reduce((acc, val) => acc + val.value, 0);
    if (temp === target)
      res.forEach((e) => {
        result.push(e.idx);
      });
    return;
  }

  for (let i = idx; i < nums.length; i++) {
    res.push({ value: nums[i], idx: i });
    comb(nums, target, res, i + 1, result);
    if (result.length >= 2) return;
    res.pop();
  }
}

// 새로고침
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const key = (target - nums[i]).toString();
    if (obj.hasOwnProperty(target - nums[i])) return [obj[key], i];
    obj[nums[i]] = i;
  }
};
