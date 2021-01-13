## 4. Median of Two Sorted Arrays

> leetCode [4](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### 풀이

1. 일단 nums1, nums2 모두 비어있으면 0 반환한다.
2. 그렇지 않으면 다음을 수행한다.
   1. 새로운 배열에 num1과 num2의 요소들을 모두 집어넣는다.
   2. 배열을 오름차순 정렬한다.
   3. 중간 위치를 설정한다.
      - `Math.floor((array.length-1) / 2)`
   4. 배열의 길이가 짝수이면
      - (중간 위치에 있는 수 + 그 다음 위치에 있는 수) / 2
   5. 배열의 길이가 홀수이면
      - (중간 위치에 있는 수) / 2
   6. 해당 값을 **소수점 5째자리**까지 반환한다.
