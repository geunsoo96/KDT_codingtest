// 데이터 정돈하기
// - 실제 코딩테스트 대비반에서 풀어보는 모의고사용 문제 중 일부를 적정수준으로 맞춘 문제입니다.

// 도전과제 : 무작위의 숫자 데이터 배열을 작은 값 순으로 정렬하기

// const inputData = [6, 2, 9, 8, 4, 0, 8, 5,  7, 1]; 
// const step = 0;

// 사용언어 : javascript, typescript, python

// 함수 이름 : sortArray()
// 전개 1. 난데없이 inputData 배열 데이터를 강사가 나에게 전달했습니다.
// 전개 2. 배열 데이터 속에 있는 원소의 값을 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 순서로 정렬해 달라고 요청이 왔습니다.
// 전개 3. 이상한 구석이 있는 강사는, 순서를 바꾸는 과정을 정렬용 메서드는 사용하지 않고 진행하는 것이 전제라고합니다.
// 전개 4. "순서를 바꾸는 실행"이 일어날 때 step 값이 1씩 증가되는 로직을 설치해 총 몇번의 실행이 일어나는지 궁금해 합니다.
// 전개 5. 리턴은 인터페이스문법을 쓰게 만들겠다는 일념으로 아래와 같은 형태의 '객체 타입'이어야 합니다.

// 출력 : 
//  {
//  "one" : 0
//  "two" : 1
//  "three" : 2
//  "four" : 3
//  "five" : 4
// }

// 문제 
// 조건 1: sort(), sorted() 메서드를 사용하지 않고 문제를 해결합니다.
// 조건 2: 주어진 무작위 배열이 아닌, 다른 무작위 형태의 배열이어도 동작하여야 합니다.
// 조건 3: sortArray() 함수는 인자로 '배열'을 받습니다.
// 조건 4: sortArray() 함수의 리턴 타입은 객체입니다.
// 조건 5: 출력 객체는 정렬이 완료된 데이터의 index 0번째가 된 순서는 "one" 키의 값으로, index 1번째는 "two" 키의 값으로 배치되어 4번째 인덱스까지 객체에 담겨 출력되어야 합니다.
// 조건 6: step값이 몇인지(실행이 몇번 진행되었는지), 콘솔에 기록되어야 합니다.



const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]; 

const sort = (data) => {
  let step = 0;
  for(let j = 1; j < data.length; j++) {
    for(let i = 0; i < data.length; i++){
      if(data[i] > data[i+1]){
        [[data[i]], [data[i+1]]] = [[data[i+1]], [data[i]]];
        step++;
      }
    }
  }
  let numberObject = {
    "one" : data[0],
    "two" : data[1],
    "three" : data[2],
    "four" : data[3],
    "five" : data[4],
  }
  console.log(step);
  // 26
  console.log(numberObject);
  // { one: 0, two: 1, three: 2, four: 4, five: 5 }
}

sort(inputData);
