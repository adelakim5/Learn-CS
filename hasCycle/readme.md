## 141. Linked List Cycle

> leetCode [141](https://leetcode.com/problems/linked-list-cycle/)

### 풀이

1. 중복된 노드를 만나면 true, 그렇지 않고 끝나면 false를 리턴한다.
   1. Set을 생성하였다.
   2. 각 노드의 value와 노드가 위치한 번호를 set에 추가하였다.
      - `${i} ${node.val}` 이런 양식으로 저장하였다.
   3. 노드의 값을 set에 저장한 양식으로 바꾸어 주었다.
   4. 다음 노드의 값이 set에 있으면? 중복된 노드를 만난 것이므로 true를 반환한다.
   5. 그렇지 않고 모든 노드를 다 돌면 cycle이 없다는 의미이므로 false를 반환한다.
