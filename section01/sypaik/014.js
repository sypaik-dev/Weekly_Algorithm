// # 가장 긴 문자열

// ## N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램

// ## 첫 줄에 자연수 N이 주어진다. (3 <= N <= 30)
// ## 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ## 각 문자열의 길이는 서로 다르다.

// ## 첫 줄에 가장 긴 문자열을 출력

// ## 5, teach, time, student, beautiful, good ==> beautiful
function solution(str) {
  let answer = "";
  let maxLength = 0;
  for (let x of str) {
    if (maxLength < x.length) {
      maxLength = x.length;
      answer = x;
    }
  }
  return answer;
}
// let string = ["teacher", "time", "student", "beautiful", "good"];
// console.log(solution(string));
