// 패턴 처리하기
// - 실제 코딩테스트 대비반에서 풀어보는 모의고사용 문제 중 일부를 적정수준으로 맞춘 문제입니다.

// 도전과제 : 빙고게임 만들기

// 함수 이름 : bingo()
// 전개 1. 배열을 가만보니 어느센가 바둑판모양처럼 보이기 시작했습니다. 개발자가 다 된 것 같습니다. 
// 전개 2. 아무런 관련 없는 다섯개의 배열을 마치 빙고게임처럼 '특정 패턴에 부합' 할 때를 찾는다면 빙고게임도 충분히 만들 수 있을 것으로 아이디어가 떠올랐습니다.
// 전개 3. 각각의 배열은 길이값 10의 원소는 기본적으로 모두 0인 형태입니다.
// 전개 4. '무엇'이 숫자 0을 1로 바꾸는지 모르지만, '만약' 숫자 1로 바뀌어 마치 빙고처럼 패턴이 맞는다면, 해당 원소 위치가 사라지고, 길이값이 줄어드는 형태의 게임을 만들고 싶어졌습니다.

// 1. 주어진 빙고 데이터 자료구조 : 빙고 판정을 받는 패턴, 아래의 보기는 다섯개의 배열중 5번 index가 모두 1이다.
// const lineOne1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
// const lineTwo1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
// const lineThr1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
// const lineFou1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
// const linefiv1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
// 2. 주어진 빙고 데이터 자료구조 : 빙고가 완성되면 판정 받은 인덱스 '열(column)' 5번에 해당하는 자리가 사라진다. 
// const lineOne2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// const lineTwo2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// const lineThr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// const lineFou2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// const linefiv2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// 설명) 원소로 결정되어 있던 숫자 1이 있던 인덱스의 값들이 모두 사라지고 길이값이 1 줄어든 상태

// 문제 
// 조건 1: 총 n개의 배열은 데이터 타입 숫자 0인 값을 총 10개 즉, 길이값 10을 가지고 있습니다. 
// 조건 2: n개의 배열 모두 같은 인덱스의 원소값이 모두 1이되면 득점으로 판정합니다. 
// 조건 3: 0과 1외에는 다른 데이터 값이나 타입이 들어올 수 없습니다.
// 조건 4: 한 번의 득점은 해당 원소를 삭제 시키고 빈자리가 다음 순서의 원소로 메워져, 최종적으로 길이값이 1줄어드는 것으로 정의 합니다.
// 조건 5: 어떤 방식으로 발생하여, 원소 데이터 값인 0이 1로 변화 되는지 알 수 없습니다.
// 예) 랜덤한 함수가 동작하여 특정 위치의 값을 변환 하거나, 키보드 입력이 되거나, 마우스 조작 등 다양한 접근이 될 수 있습니다.
// 조건 6: 모든 배열 값이 없어졌을 때, 즉 길이값이 0이 되었을 때, "승리!" 라는 문구를 출력합니다.

// 추가도전 : score처리 , timer 등 다양한 응용이나 애니메이션, dom api를 통한 인터렉션

// 목표 : 주식 종목, 쇼핑몰 장바구니, 애니팡 게임, 카드놀이 등 마련된 사용자 경험이나 예견된 변화에 대응 하는 처리 
// 자바스크립트로 문제를 접근해본 '시도'가 있다면 그것이 꼭 정답이 아니더라도 파이썬 방식으로 작성 해볼 것
interface bingoArray {
  one: number[],
  two: number[],
  three: number[],
  four: number[],
  five: number[],
}

const lineOne2: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo2: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineThr2: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFou2: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFiv2: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const value = {
  one: lineOne2,
  two: lineTwo2,
  three: lineThr2,
  four: lineFou2,
  five: lineFiv2
}
const bingo2 = (index: bingoArray) => {
  let array = [index.one, index.two, index.three, index.four, index.five];
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      if(array[i][j] === 0 || array[i][j] === 1) {
        array[i][j] = Math.floor(Math.random()*2);
        console.log(array[i])
        console.log("게임 진행");
        if(array[0][j] === 1 && array[1][j] === 1 && array[2][j] === 1 && array[3][j] === 1 && array[4][j] === 1) {
          array[0].splice(j, 1);
          array[1].splice(j, 1);
          array[2].splice(j, 1); 
          array[3].splice(j, 1); 
          array[4].splice(j, 1);
          if(array[i].length === 0) {
            console.log("승리")
          }
        }
      } else {
        console.log("앙대용");
      }
    }
  }
}
bingo2(value);