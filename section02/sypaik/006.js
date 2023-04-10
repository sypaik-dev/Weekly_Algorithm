// # 격차판 최대합

// ## N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

// 행과 열이 모두 N개 ==> 배열을 행과 열로 표현
// 각 행의 합
// 각 열의 합
// 대각선의 합

function solution(N) {
  const n = matrix.length;

  let rowSums = Array(n).fill(0);
  let colSums = Array(n).fill(0);
  let diag1Sum = 0;
  let diag2Sum = 0;

  // 각 행, 열, 대각선의 합 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowSums[i] += matrix[i][j];
      colSums[j] += matrix[i][j];
      if (i === j) {
        diag1Sum += matrix[i][j];
      }
      if (i + j === n - 1) {
        diag2Sum += matrix[i][j];
      }
    }
  }

  // 가장 큰 합 출력
  const maxSum = Math.max(...rowSums, ...colSums, diag1Sum, diag2Sum);
}

// test용
// test1 = [10, 13, 12, 39] ==> 2 * 2의 격자판 표현
// test2 = [10, 13, 10, 12, 39, 30, 11, 25, 50] ==> 3 * 3의 격자판 표현
