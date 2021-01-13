## 1. Two Sum

> leetcode [1](https://leetcode.com/problems/two-sum/)

- 배열 내 두 수를 골라 더한 값이 target인 두 수의 인덱스를 반환한다.

#### 원래 풀이

- 두 수를 재귀를 통해 고른다.
- 고른 두 수의 합이 target과 같으면 멈춘다.
- 두 수의 인덱스를 배열에 담아 반환한다.

#### 새로 고친 풀이

- 배열 내 각 수를 Object에 담는다.
  - `key: nums[i] => {value: i}`
- Object의 키값 중에 `target - nums[i]`이 있는지 확인한다.
- 있으면 ? `Object[target - nums[i]]`의 value와 현재 i를 배열에 담아 반환한다.
