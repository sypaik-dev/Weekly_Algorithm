// # 연필 개수

// ## 연필 1다스는 12자루, 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명 학생 수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램

// ## 첫 번째 줄에 1000 이하의 자연수 N이 입력

// ## 첫 번째 줄에 필요한 다스 수를 출력

// ## 23 ==> 2
// ## 25 ==> 3

// ## 178 ==> 15

function solution(n) {
  return Math.ceil(n / 12);
}
console.log(solution(23));