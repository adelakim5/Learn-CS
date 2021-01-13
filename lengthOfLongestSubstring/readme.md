## 3. Longest Substring Without Repeating Characters

> leetCode [14](https://leetcode.com/problems/longest-common-prefix/)

### 풀이

1. s의 문자들을 하나씩 `시작하는 문자` 로 둔다.

```js
s = "skdnsss"
0번째 임시 substring: "s"
// s 다음으로 계속 문자열 이어줄 예정
1번째 임시 substring: "k"
// k 다음으로 계속 문자열 이어줄 예정
2번째 임시 substring: "d"
// d 다음으로 계속 문자열 이어줄 예정
3번째 임시 substring: "n"
// n 다음으로 계속 문자열 이어줄 예정
4번째 임시 substring: "s"
// s 다음으로 계속 문자열 이어줄 예정
5번째 임시 substring: "s"
// s 다음으로 계속 문자열 이어줄 예정
6번째 임시 substring: "s"
// s 다음으로 계속 문자열 이어줄 예정
```

2. 각 substring 이어준다.
   1. 0번째 임시 substring: `s`
      - 0번째 이후부터 strs의 끝까지 돌며 **중복되지 않는 문자를 이어붙인다.**
      ```js
      substring = "s";
      // 0 다음인 1번째 문자부터 시작
      substring = "sk";
      substring = "skd";
      substring = "skdn";
      substring = "skdn" + "s"; // 이미 s 있음, 끝냄
      // 현재 substring 길이: 4
      ```
   2. 1번째 임시 substring: `k`
      - 1번째 이후부터 **중복되지 않는 문자를 이어붙인다.**
      ```js
      substring = "k";
      // 1 다음인 2번째 문자부터 시작
      substring = "kd";
      substring = "kdn";
      substring = "kdns";
      substring = "kdns" + "s"; // 이미 s 있음, 끝냄
      // 현재 substring 길이: 4
      ```
   3. 다음 substring 위와 같은 과정을 진행하며 **substring의 길이**를 구한다.
3. 가장 긴 substring 길이를 return한다.
