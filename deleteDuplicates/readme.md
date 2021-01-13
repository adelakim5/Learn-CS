## 83. Remove Duplicates from Sorted List

> leetCode [83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

### 풀이

1. ListNode로 들어온 head를 current에 위임한다.

```js
let current = head;
```

```js
head = [1, 1, 2, 3, 4]
// 위 모습은 다음처럼 연결되어있다.
head = ListNode {
            val: 1
            next: ListNode {
                val: 1
                next: ListNode {
                    val: 2
                    next: ListNode {
                        val: 3
                        next: ListNode {
                            val: 4
                            next: null
                        }
                    }
                }
            }
       }
```

2. current의 값이 current.next의 값과 같으면

   - current의 next를 **current.next.next**로 지정한다.

   ```js
   // current에 head를 위임했으니, 다음과 같다.
   current.val = 1
   current.next.val = 1

   // 두 값이 같으므로 current의 next에 current.next의 next를 가져온다.
   current = ListNode {
                   val: 1
                   next: ListNode {
                       val: 2 // <= current의 next에 3번째에 있던 2를 가져옴
                       next: ListNode {
                           val: 3
                           next: ListNode {
                               val: 4
                               next: null
                           }
                       }
                   }
               }
   ```

3. current의 값이 current.next의 값과 다르면

   - current를 이제 current.next로 이동한다.

   ```js
   current.val = 1
   current.next.val = 2
   // 이제 current를 current.next로 한다.

   current = ListNode {
       val: 2
       next: ListNode {
           val: 3
           next: ListNode {
               val: 4
               next: null
           }
       }
   }
   ```

4. 위 과정을 리스트의 노드 전부를 다 돌때까지 반복한다.
5. head를 반환한다.
   - head를 가장 앞에 있는 ListNode를 가리키고있다.
   - 따라서 head를 리턴할 때 **head와 연결된 다음 ListNode**들도 함께 반환된다.
   - `ListNode` 형으로 반환해야한다!

#### 🤦‍♀️ 나의 시행착오

- 엄청 어려운 풀이는 아닌데 릿코드의 리스트가 생소해서 이해하는데 시간이 오래 걸렸다.
- `console.log`로 출력하니까 `[]`로 감싸진 형식으로 나와서 답답했다.
- `console.dir`를 이용하면 내가 원하는 노드 형태로 출력된다!
