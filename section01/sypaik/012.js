// # 대문자로 통일

// ## 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램 작성

// ## 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.
// ## 첫 줄에 대문자로 통일된 문자열이 출력된다.

// ## ItisTimeToStudy ==> ITISTIMETOSTUDY

function solution(str) {
  for (let i = 0; i < str.length; i++) {
    str = str.toUpperCase();
  }
  return str;
}

// let string = "ItisTimeToStudy";
// console.log(solution(string));
