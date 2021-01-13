var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) return 0;
  let answer = 0;
  let convergences = [...nums1, ...nums2].sort((a, b) => a - b);
  if (convergences.length % 2) {
    let mid = Math.floor((convergences.length - 1) / 2);
    answer = convergences[mid].toFixed(5);
  } else {
    let mid1 = Math.floor((convergences.length - 1) / 2);
    let mid2 = mid1 + 1;
    answer = ((convergences[mid1] + convergences[mid2]) / 2).toFixed(5);
  }
  return answer;
};
