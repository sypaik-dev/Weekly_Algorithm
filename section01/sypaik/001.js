// # 세 수 중 최솟값

// ## 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력 (정렬 사용 X)

// ## 첫번째 줄에 100이하의 세 자연수가 입력되고, 첫번째 줄에 가장 작은 수를 출력

// ## 6, 5, 11 ==> 5

function solution(a, b, c) {
  let answer = 0;
  for (let i = 0; i <= 3; i++) {
    if (a > b) {
      answer = b;
    } else {
      answer = a;
    }
    if (answer > c) {
      answer = c;
    }
  }
  return answer;
}
