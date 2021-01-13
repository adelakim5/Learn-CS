## 14. Longest Common Prefix

> leetCode [14](https://leetcode.com/problems/longest-common-prefix/)

### 풀이

1. strs의 문자들을 하나씩 `시작하는 Prefix의 문자` 로 둔다.

```js
strs = skdnsss
0번째 임시 prefix: "s"
// s 다음으로 계속 문자열 이어줄 예정
1번째 임시 prefix: "k"
// k 다음으로 계속 문자열 이어줄 예정
2번째 임시 prefix: "d"
// d 다음으로 계속 문자열 이어줄 예정
3번째 임시 prefix: "n"
// n 다음으로 계속 문자열 이어줄 예정
4번째 임시 prefix: "s"
// s 다음으로 계속 문자열 이어줄 예정
5번째 임시 prefix: "s"
// s 다음으로 계속 문자열 이어줄 예정
6번째 임시 prefix: "s"
// s 다음으로 계속 문자열 이어줄 예정
```

2. 각 prefix를 이어준다.
   1. 0번째 임시 prefix: `s`
      - 0번째 이후부터 strs의 끝까지 돌며 **중복되지 않는 문자를 이어붙인다.**
      ```js
      prefix = "s";
      // 0 다음인 1번째 문자부터 시작
      prefix = "sk";
      prefix = "skd";
      prefix = "skdn";
      prefix = "skdn" + "s"; // 이미 s 있음
      // 현재 prefix 길이: 4
      ```
   2. 1번째 임시 prefix: `k`
      - 1번째 이후부터 **중복되지 않는 문자를 이어붙인다.**
      ```js
      prefix = "k";
      // 1 다음인 2번째 문자부터 시작
      prefix = "kd";
      prefix = "kdn";
      prefix = "kdns";
      prefix = "kdns" + "s"; // 이미 s 있음
      // 현재 prefix 길이: 4
      ```
   3. 다음 prefix들도 위와 같은 과정을 진행하며 **prefix의 길이**를 구한다.
3. 가장 긴 prefix의 길이를 return한다.
