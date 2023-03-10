// 게임 머니 계산하기
// - 실제 코딩테스트 대비반에서 풀어보는 모의고사용 문제 중 일부를 적정수준으로 맞춘 문제입니다.

// 도전과제 : 게임 세계관 속 화폐 단위 정리하기
// 화폐 단위 : copper , silver, gold 
// 화폐 가치 :
// 8 copper === 1 silver
// 4 silver === 1 gold
// 1 leather === 2 silver

// 사용언어 : javascript, typescript, python

// 함수 이름 : game_money()
// 게임에서 획득 한 전리품 : 가죽 45개

// 전개 1. 게임플레이어 공미남은 주말을 맞아 실컷 게임을 즐기기로 마음 먹었습니다.
// 전개 2. 게임초보라 초보사냥터에서 열심히 초보몬스터를 열심히 사냥했습니다.
// 전개 3. 사냥을 통해 한시간 동안 얻은 전리품은 가죽 45개 였습니다.
// 전개 4. 그날 공미남은 총 8시간의 게임을 숨만쉬고 했습니다.

// 출력
// "이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 00개 입니다."
// "gold를 제외한 나머지 값어치는 모두 copper로 바꾸어놓아, 총 00개의 copper를 챙겼습니다."
// "공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 "00gold, 00copper"를 얻었습니다"

// 문제 
// 조건 0. 특수한 화폐단위를 적용하여 환산을 수 있는 알고리즘을 작성하시오.
// 조건 1: { gold = true, silver = false, copper = true } 라는 함수 객체 타입의 매개변수가 셋팅되어있다면 gold와 copper에 대한 계산치만 결과같이 나올 수 있도록 기능을 조성하시오
// 조건 2: 1gold = 32 copper  

const game_money = (leather, gold, silver, copper, item) => {
  if(gold * 1 === silver * 4 && leather * 1 === silver * 2 && silver * 1 === copper * 8 && item * 1 === silver * 2 && item * 2 === gold * 1){
    console.log(`이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${gold}개 입니다.`);
    console.log(`gold를 제외한 나머지 값어치는 모두 cooper로 바꾸어놓아, 총 ${copper}개의 copper를 챙겼습니다.`);
    console.log(`공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${gold}gold, ${copper}copper를 얻었습니다.`)
  }
}
game_money(8, 1, 1, 1, 45);
const option = {
  gold: true,
  silver: false,
  copper: true,
}
const game_money1 = (item, hour) => {
  const gold = Math.floor(item / 2);
  const copper = (item % 2) * 16;
  console.log(copper);
  console.log(`이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는 ${gold}개 입니다.`);
  console.log(`gold를 제외한 나머지 값어치는 모두 cooper로 바꾸어놓아, 총 ${copper}개의 copper를 챙겼습니다.`);
  const totalItem = item * hour;
  const totalGold = Math.floor(totalItem / 2);
  const totalCopper = (totalItem % 2) *16;
  console.log(`공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총 ${totalGold}gold, ${totalCopper}copper를 얻었습니다.`)
}
game_money1(45, 8);

// if(typeof gold === true, typeof silver === false, typeof copper === true)

// copper = gold * 32;
// // 1copper = 32gold
// gold = item * 2;
// // 1gold = 2가죽
// item = silver * 2;
// // 1가죽 = 2silver
// hour = (item * 45)*hour;