## 14. Longest Common Prefix

> leetCode [14](https://leetcode.com/problems/longest-common-prefix/)

### 풀이

1. strs의 문자들을 두개씩 골라 대조한다.
   - strs[0], strs[1]
   - strs[1], strs[2]
   - ...
   - 이런식으로 골라 대조한다.
2. 대조하는 함수를 만든다.
   - 더 짧은 문자열을 기준으로 for문을 돌리면서
     - 문자가 같으면 `prefix`에 이어붙인다.
     - 문자가 다르면 break한다.
   - `prefix`를 반환한다.
3. 대조해서 생성된 `prefix`중 가장 긴 것을 반환한다.
