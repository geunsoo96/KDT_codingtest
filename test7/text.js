/* 도전과제 : 텍스트의 경향 분석하기

함수 이름 : text_listup()
전개 1. 매일같이 사용하던 더미텍스트인 로렘입숨을 뜯어보고 싶어졌습니다.
전개 2. 의미가 없는 문장의 나열이라고는 하지만, 그래도 알파벳을 사용하고 있기 때문에 주어진 문장 중에 가장 많이 사용한 알파벳이 있을 것이라는 호기심이 생겼습니다.
전개 3. 하나하나 사람이 셀 수는 없는 노릇이기에 컴퓨터에게 맡기기로 합니다.
전개 4. 주어진 더미텍스트의 알파벳은 총 무엇을 몇개 사용되어 만들어진 문장일까요?

주어진 변수 fromInput 데이터 : 
const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "


문제 
조건 1: 주어진 데이터에 사용된 알파벳은 무엇이 몇개를 사용했는지 객체(object, dictionary) 타입으로 출력되도록 해야합니다.
조건 2: 해당 알고리즘은 다른 나라의 언어(한글, 일본어와 같은)이어도 동작해야 합니다.
조건 3: 조건 1이 출력되었다면, 가장 많이 작성된 음절(알파벳)만큼, 가장 적게 작성된 음절(알파벳)도 가장 많이 작성된 음절과 차이난 만큼 생성되어, 문장 사이사이에 무작위로 배치되어야 합니다. 
예) 많이쓴 음절 10개, 적게쓴 음절 2개 -> 적게쓴 음절8개 무작위로 문자열 사이사이 추가
조건 3: 조건3이 해결되었다면,  띄어쓰기는 5개의 음절이 뭉쳐져 마치 하나의 단어처럼 보이도록 조정합니다. 예) Itisa longe stabl ished
조건 4: 부모함수(root)는 text_listup() 하나이어야만 합니다. (자식함수는 자유롭게 진행)


목표 : 문자열편집은 곧 동적으로 문서 핸들링, 문자열변형은 곧 쿼리스트링 핸들링
 */

let eng = /^[a-zA-Z]*$/;
let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/g;
let kor = /^[ㄱ-ㅎ가-힣/]$/;
const text_listup = (language, special) => {
  const fromInput = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) ";
  let specialFilter =  fromInput.toLowerCase().replace(special, "");
  if(specialFilter.match(language)){
    console.log("영어임")
    let object = {};
    for(let i = 0; i < specialFilter.length; i++){
      if(object[specialFilter[i]] >= 1){
        object[specialFilter[i]] += 1; 
      } else {
        object[specialFilter[i]] = 1
      }
    }
    console.log(object)
  }else{
    console.log("다른 언어입니다.")
    // 만약 다른 나라의 언어이면 에러 발생
  }
}
text_listup(eng, reg);
// --------------------------------------------------------------------------
// 처음 써봤던 문법
// if(fromInput.match(language)){
//   console.log("영어")
//   let specialTextFilter = fromInput.toLowerCase().replace(special, "")
//   let object = {};
//   specialTextFilter
//   for(let i = 0; i < specialTextFilter.length; i++){
//     if(object[specialTextFilter[i]] >= 1){
//       object[specialTextFilter[i]] += 1; 
//     } else {
//       object[specialTextFilter[i]] = 1
//     }
//   }
//   console.log(object)
// }else{
//   console.log("no")
// }
