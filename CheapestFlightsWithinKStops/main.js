/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = new Map();

  for (let [st, en, w] of flights) {
    // 인접한 정점 확인
    if (adj.has(st)) adj.get(st).push([en, w]);
    else adj.set(st, [[en, w]]);
  }

  function dijkstra(start) {
    // bfs + 다익스트라 알고리즘
    const q = [];
    const dist = Array(n).fill(Infinity); // src에서 각 정점까지의 비용을 구하는 테이블

    q.push([start, 0, 0]);
    dist[start] = 0;

    while (q.length) {
      const [here, cost, cnt] = q.shift();

      if (cnt > k || !adj.get(here)) continue; // k 초과 혹은 인접한 정점 없으면 건너뛰기

      for (let [next, weight] of adj.get(here)) { // 인접한 정점으로 이동
        const nextDist = cost + weight;
        if (dist[next] > nextDist) {
          // 현재 비용보다 작으면
          dist[next] = nextDist; // 작은 비용으로 갱신
          q.push([next, nextDist, cnt + 1]); // 카운트 추가한 후 큐에 푸시
        }
      }
    }
    return dist[dst];
  }

  const ans = dijkstra(src);
  return ans === Infinity ? -1 : ans;
};
