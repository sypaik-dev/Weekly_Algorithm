// # 최솟값 구하기

// ## 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력

// ## 첫 번째 줄에 7개의 수가 주어진다.

// ## 첫 번째 줄에 가장 작은 값을 출력한다.

// ## 5 3 7 11 2 15 17 ==> 2

function solution(numbers) {
  let min = 100;
  for (let i = 0; i < 7; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  return min;
}
// let arr = [5, 3, 7, 11, 2, 15, 17];
// console.log(solution(arr));