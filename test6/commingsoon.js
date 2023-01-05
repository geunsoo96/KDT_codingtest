// 데이터조건기반 값 도출
// - 실제 코딩테스트 대비반에서 풀어보는 모의고사용 문제 중 일부를 적정수준으로 맞춘 문제입니다.

// 도전과제 : 데이터의 특성을 파악하여 값을 도출하기

// 함수 이름 : commingsoon()
// 전개 1. 평소에 포켓몬스터를 좋아하는 공미남은 11월 18일 포켓몬스터 스칼렛 바이올렛이 출시된다는 소식을 알게 되었습니다.
// 전개 2. 이번에 정식발매되는 포켓몬스터 게임 가격은 64,800원입니다.
// 전개 3. 하지만 공미남의 고정지출예산을 확인해보니 포켓몬스터 게임을 사버리면 고정지출에서 얼만큼을 절약해야 하는 위기에 놓였습니다. 
// 전개 4. 공미남의 고정지출예산은 총 100,000원(십만원)입니다.
// 전개 5. 고정지출 항목에서 어떤 것을 몇번 절약해야 게임을 구매할 수 있을까요?

// 고정지출 항목 : 
// {
//  "출퇴근비용" : {
//    "카카오톡자전거" : "1500원",
//    "택시" : "3500원",
//   },
//   "커피" : {
//     "엔시나" : "4500원",
//     "카누" : "200원",
//   },
//   "고양이간식" : {
//     "닭고기" : "400원",
//     "락토프리우유" : "800원",
//   }
// }
// 고정지출 내역 : 
// {
//  "출퇴근비용" : {
//    "카카오톡자전거" : "19회",
//    "택시" : "3회",
//   },
//   "커피" : {
//     "엔시나" : "6잔",
//     "카누" : "15잔",
//   },
//   "고양이간식" : {
//     "닭고기" : "30개",
//     "락토프리우유" : "2개",
//   }
// }
// 고정지출 중요도 : 
// 1. 출퇴근 비용 : 30분 더 일찍 일어나면 지출을 안할 수 있음
// 2. 커피 : 강의할 때 말이 안나오므로, 어떤 형태로든 꼭 마셔야함. 원장님 카드를 써서 훔쳐먹으면 지출을 안할 수 있음
// 3. 고양이간식 : 가족의 건강을 챙기기 위함이므로 지출을 줄일 수 없음

// 문제 
// 조건 1: 고정 지출 항목, 내역 정보의 자료구조 및 데이터타입, 값은 외부에서 전달받은 "형식"이므로 변형 할 수 없습니다.
// 조건 2: 중요도 부분에서 3번 항목인 "고양이간식"은 완결한 고정지출 이므로 절약할 수 없습니다.
// 조건 3: 함수의 인자(입력) 데이터타입은 객체입니다.
// 조건 3: 리턴(출력)은 하나의 문장, 문자열(string)로 항목별 절약횟수가 도출되어야 합니다.
// 조건 4: 고정지출의 종류와 갯수, 총 예산과 목표가격(게임)이 변할수도 있습니다.
// 조건 6: 일찍 일어나면 30분당 1만큼 피로도가 증가합니다. 원장님 카드를 1회 훔쳐 사용하면 미움지수가 1만큼 증가합니다.

// 목표 : 공미남이 최대한 행복하게 절약하며 게임을 사는 방법은 어떤 방식이 되어야 좋을까요? 
// 예시(자유롭게 작성) : "oo님은 A를 a회 일찍 일어나면 Z만큼 피곤해지고, B를 b회 훔쳐먹으면 Y만큼 미움받지만 C게임을 살수있게 됩니다!"

const commingsoon = (teacher, master, time, card, timeCount) => {
  let outlayMoney = {
    // 고정지출 항목
    commute : {
      // 출퇴근 비용
      kakao : 1500,
      // 카카오자전거
      taxi : 3500,
      // 택시
    },
    coffee : {
      // 커피
      encina : 4500,
      // 엔시나
      canu : 200,
      // 카누
    },
    cat : {
      // 고양이 간식
      chicken : 400,
      // 닭고기
      milk : 800
      // 락토프리우유
    }
  };
  let outlayHistory = {
    // 고정지출 내역
    commute : {
      kakao : 19,
      taxi : 3,
    },
    coffee : {
      encina : 6,
      canu : 15,
    },
    cat : {
      chicken : 30,
      milk : 2
    }
  };
  let kakaoMoney = (outlayMoney.commute.kakao*outlayHistory.commute.kakao);
  // 카카오자전거
  let taxiMoney = (outlayMoney.commute.taxi*outlayHistory.commute.taxi);
  // 택시
  let encinaMoney = (outlayMoney.coffee.encina*outlayHistory.coffee.encina);
  // 엔시나
  let canuMoney = (outlayMoney.coffee.canu*outlayHistory.coffee.canu);
  // 카누
  let chickenMoney = (outlayMoney.cat.chicken*outlayHistory.cat.chicken);
  // 닭고기
  let milkMoney = (outlayMoney.cat.milk*outlayHistory.cat.milk);
  // 우유
  const KongMiNamMoney = 100000;
  const pokemonGame = 64800;
  // 고정지출 10만원, 현재 나가는 돈 82600원, 남는 돈 17400원, 필요한 돈 47400원, 절대 뺄수 없는 고양이 지출 13600원, 절약 가능 금액 69000원
  let totalNomalMoney = kakaoMoney+taxiMoney+encinaMoney+canuMoney+chickenMoney+milkMoney;
  console.log("현재 전체 지출 비용 합계", totalNomalMoney);
  // 현재 전체 지출 비용 합계 82600원
  console.log("현재 출퇴근 비용", kakaoMoney+taxiMoney);
  // 현재 출퇴근비용 39000원
  console.log("현재 커피 비용", encinaMoney+canuMoney);
  // 현재 커피지출 30000원

  let saveKakao = kakaoMoney-(outlayMoney.commute.kakao*timeCount);
  // 일찍 일어난 만큼 자전거 비용이 절감(최대 19회)되고 나머지 자전거 지출 금액
  let saveTaxi = taxiMoney-(outlayMoney.commute.taxi*(timeCount-19));
  // 자전거 비용을 모두 절감 시키고 택시비를 또 절감시켜서 남은 택시 지출 금액 
  if(timeCount > 19 && saveKakao < 0 && saveKakao < 1500) {
    // 만약에 19회 초과로 일찍 일어나면
    saveKakao = 0;
    // 자전거 지출이 없다.
    if(timeCount > 22 && saveTaxi < 0 && saveTaxi < 3500) {
      // 만약에 22회 초과로 일찍 일어나면
      saveTaxi = 0;
      // 택시 지출이 없다.
    }
  }
  if(timeCount < 19 && saveKakao > 0 && saveKakao > 1500) {
    // 만약 일찍 일어난 횟수가 19회 미만이면
    saveTaxi = taxiMoney;
    // 택시비는 아끼지 못한다 ㅇㅋ?
  }
  console.log("절약하고 남은 카카오자전거비용", saveKakao);
  console.log("자전거 모두 절약하고 택시를 절약해서 남은 금액", saveTaxi);
  console.log(`총 22번 일찍 일어나면 자전거와 택시비를 모두 절약해서 ${kakaoMoney+taxiMoney}원을 전부 아낄 수 있음.` )
  
  let saveEncina = encinaMoney-(outlayMoney.coffee.encina*card);
  // 원장님 카드 훔친만큼 절약하고 남은 엔시나 지출 금액
  let saveCanu = canuMoney-(outlayMoney.coffee.canu*(card-6));
  // 엔시나를 모두 저축하는데 성공했을때 더 절약하고 남은 카누 지출 금액
  if(card > 6 && saveEncina < 0 && saveEncina < 4500) {
    // 만약 원장님 카드를 6번 초과로 훔치면
    saveEncina = 0;
    // 엔시나는 걱정ㄴㄴ
    if(card > 21 && saveCanu < 0 && saveCanu < 200) {
      // 만약 원장님 카드를 21번 초과로 훔치면(어이구야....)
      saveCanu = 0;
      // 카누도 걱정ㄴㄴ ♥
    }
  }
  if(card < 6 && saveEncina > 0 && saveEncina > 4500) {
    // 만약 카드 훔친 횟수가 6회 미만이면
    saveCanu = canuMoney;
    // 카누비용은 아끼지 못한다 ㅇㅋ?
  }
  console.log("절약하고 남은 엔시나 비용", saveEncina);
  console.log("엔시나를 모두 절약하고 카누를 절약한 다음 남은 카누 비용", saveCanu);
  console.log(`${master}님의 카드를 총 21번 훔치면 커피값을 모두 절약해서 ${encinaMoney+canuMoney}원을 전부 아낄 수 있음.`)

  if (saveKakao+saveTaxi+saveEncina+saveCanu <= 21600) {
    console.log("선생님 포켓몬 게임 쌉가능.")
    // 총 절약 비용이 21600원보다 적거나 같으면 포켓몬게임 쌉가능
    // 고양이값 제외하고 아꼈을때 포켓몬게임 할 수 있는 최소 지출 금액이 계산해보니 21600원
  }
  let fatigue = 0;
  // 피로도
  let hate = 0;
  // 미움지수
  for(let i = 0; i < timeCount; i++){
    if(time * timeCount != i){
      fatigue++
      // 일찍 일어난 횟수만큼 피로도 그 횟수만큼 같이 증가
    }
  }
  // 30분 단위로 횟수 --> 그 횟수만큼 피로도가 1씩 증가
  for(let i = 0; i < card; i++){
    hate++
    // 카드 훔친만큼 혐오증도 1씩 같이 생김
  }
  // 카드를 훔치는 만큼 늘어나는 미움지수
  return console.log(`${teacher}님은 잠을 ${time}분 단위로 ${timeCount}회 일찍 일어나면 피로도 수치가 ${fatigue}만큼 증가하고, ${master}님 카드를 ${card}번 훔치면 ${hate}만큼 미움받지만 포켓몬게임을 살 수 있게 됩니다.`)
};
commingsoon("공욱재", "원장", 30, 15, 20);
// (주인공, 피해자, 일어나는 시간 단위, 카드 훔친 횟수, 일찍 일어난 횟수)