## 2. Add Two Numbers

> leetCode [2](https://leetcode.com/problems/add-two-numbers/)

### 풀이

1. l1와 l2의 노드들을 순서대로 합산한다.

   - 합산 시 sum, carry로 나눠 자리올림을 구별하였다.
   - 합한 값의 수에 따라 carry와 sum을 구한다.

   ```js
   if (sum > 10) {
     // 즉 sum이 두자리 수면
     carry = sum[0]; // 자리올림 수
     sum = sum[1]; // 마지막 자릿수
   } else {
     carry = 0;
     sum = sum;
   }
   ```

   - carry는 다음 노드 합산 시 같이 합산해 준다.

2. 합한 sum은 차례로 ListNode에 붙인다.

```js
let answer = new ListNode(); // 답으로 제출할 ListNode 생성
let current = answer; // current에 위임
// current = ListNode {
//               val: 0
//              next: null
//          }

current.next = sum;
// current = ListNode {
//               val: 0
//               next: ListNode {
//                        val: sum <= current 다음에 연결
//                        next: null
//                }
//          }

current = current.next; // 계속 뒤이어 붙여주기 위해 이동
// ListNode {
//     val: 0
//     next: ListNode { <= current
//              val: sum
//              next: null
//      }
//}
```

3. l1와 l2의 노드가 모두 null이면 계산 과정을 종료한다.
   - 만약 carry가 1 이상이면? answer의 next에 carry를 붙인다.
4. answer를 반환한다.
