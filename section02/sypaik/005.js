// # 등수 구하기

// ## N(1 <= N <= 100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요

function solution(scores) {
  let answer = [];
  for (let i = 0; i < scores.length; i++) {
    let rank = 1;
    for (let j = 0; j < scores.length; j++) {
      if (scores[j] > scores[i]) {
        rank++;
      }
    }
    answer.push(rank);
  }
  return answer;
}

// test용
// test1 = [87, 89, 92, 100, 76];

// console.log(test1);
