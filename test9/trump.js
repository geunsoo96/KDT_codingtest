/* 합조건 수량 제어하기
- 실제 코딩테스트 대비반에서 풀어보는 모의고사용 문제 중 일부를 적정수준으로 맞춘 문제입니다.

도전과제 : 트럼프덱 만들어 제어하기

기본코드 : 
const shape_array = ["spade", "heart", "diamond", "club", "joker"];
trump_deck(shapeArray)

전개 1. 카드 마술사에게 깜짝 선물할 카드를 만들어 주려고 합니다.
전개 2. 트럼프카드 한 벌을 찍어내는 기계의 로직을 만들려고 찾아보니, 총 다섯개의 모양이 있다는 것을 알게 되었습니다.
전개 3. 하나의 모양마다 총 13개의 카드가 존재합니다. 
예를들어 하트모양의 카드는 1부터 10까지, 11에 해당하는 J, 12에 해당하는 Q, 13에 해당하는 K 까지를 포함합니다. 
전개 4. 조커는 총 두 장을 가지고 있습니다.

함수를 통해 만들어지는 트럼프 덱의 자료구조는 다음과 같습니다.
{
spade : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
heart : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
diamond : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
club : { "A" : 1, "2" : 2, ..(중략)... , "10": 10, "J" : 11, "Q" : 12, "K" : 13 } , 
joker : { "RED" : 1, "BLACK" : 2 } 
}

문제 
조건 1: 트럼프 카드의 구성과 갯수는 정해져 있는 규칙이므로, 정확한 수량과 항목이 중요합니다. 
조건 2: 위의 함수를 호출 했을 때, 리턴 타입은 위의 보기와 같은 객체타입 이여야 합니다.
조건 3: 리턴되어 만들어진 객체의 키들의 갯수는 다섯개의 모양(shape_array)을 제외하고 13 * 4 + 2 = 54의 길이값을 갖는 다는 것을 조회를 통해 도출되는 방식으로 확인 해야 합니다.
테스트 출력 예시 ) "해당 리턴된 객체의 카드 갯수에 대한 검사결과, 총 54개로 정상적인 구성입니다."

추가도전 : 카드마다 갖는 데이터 자료구조
위 문제 형태 : "A" : 1 이라면 도전형태는 "A" : { "value" : 1, "isOpen" : false, "isContain" : true } 로 고차원화하여, 다양한 정보를 담을 수 있도록 완성도 끌어올리기 

추가도전 : 덱의 수량이 줄어드는 등 각종 카드놀이 규칙 만들어보기

목표 : 해당 프로젝트의 "비즈니스 로직"인 매수 매도 개념을 고차원화하는 과정에 접근 하는 것으로, 수익을 투자자들에게 배분하는 형태에서 위의 자료구조 셋업 훈련이 매우 주요합니다.   */

const shape_array = ["spade", "heart", "diamond", "club", "joker"];
const trump_deck = shapeArray => {
  let jokerArray = ["RED", "BLACK"];
  let alphabet = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let cardObj = {};
  let alphabetObj = {};
  let jockerObj = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphabetObj[alphabet[i]] = i + 1;
  }
  for (let k = 0; k < jokerArray.length; k++) {
    jockerObj[jokerArray[k]] = k + 1;
  }
  for (let j = 0; j < shapeArray.length; j++) {
    cardObj[shapeArray[j]] = alphabetObj;
    if (shapeArray[j] === "joker") {
      cardObj[shapeArray[j]] = jockerObj;
    }
  }
  console.log(alphabetObj);
  // console.log(cardObj);
};
trump_deck(shape_array);

// shapeArray.map((item, value) => {
//   let alphabet = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//   ];
//   item = {
//     alphabet: value,
//   };
//   console.log(item);
// });
