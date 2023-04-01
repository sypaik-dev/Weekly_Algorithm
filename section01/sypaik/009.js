// # A는 #으로

// ## 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램 작성

// ## 첫 번째 줄에 문자열이 입력된다
// ## 첫 번째 줄에 바뀐 단어를 출력한다.

// ## BANANA ==> B#N#N#

function solution(voca) {
  for (let i = 0; i < voca.length; i++) {
    voca.replaceAll("A", "#");
  }
}
