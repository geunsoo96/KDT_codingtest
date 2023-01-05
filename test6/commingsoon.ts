interface value {
  teacher: string;
  master: string;
  time: number;
  card: number;
  timeCount: number;
}
const answer = {
  teacher: "공욱재",
  master: "원장",
  time: 30,
  card: 15,
  timeCount: 15
}
const commingsoon1 = ( value:value ) => {
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

  let saveKakao = kakaoMoney-(outlayMoney.commute.kakao*value.timeCount);
  // 일찍 일어난 만큼 자전거 비용이 절감(최대 19회)되고 나머지 자전거 지출 금액
  let saveTaxi = taxiMoney-(outlayMoney.commute.taxi*(value.timeCount-19));
  // 자전거 비용을 모두 절감 시키고 택시비를 또 절감시켜서 남은 택시 지출 금액 
  if(value.timeCount > 19 && saveKakao < 0 && saveKakao < 1500) {
    // 만약에 19회 초과로 일찍 일어나면
    saveKakao = 0;
    // 자전거 지출이 없다.
    if(value.timeCount > 22 && saveTaxi < 0 && saveTaxi < 3500) {
      // 만약에 22회 초과로 일찍 일어나면
      saveTaxi = 0;
      // 택시 지출이 없다.
    }
  }
  if(value.timeCount < 19 && saveKakao > 0 && saveKakao > 1500) {
    // 만약 일찍 일어난 횟수가 19회 미만이면
    saveTaxi = taxiMoney;
    // 택시비는 아끼지 못한다 ㅇㅋ?
  }
  console.log("절약하고 남은 카카오자전거비용", saveKakao);
  console.log("자전거 모두 절약하고 택시를 절약해서 남은 금액", saveTaxi);
  console.log(`총 22번 일찍 일어나면 자전거와 택시비를 모두 절약해서 ${kakaoMoney+taxiMoney}원을 전부 아낄 수 있음.` )
  
  let saveEncina = encinaMoney-(outlayMoney.coffee.encina*value.card);
  // 원장님 카드 훔친만큼 절약하고 남은 엔시나 지출 금액
  let saveCanu = canuMoney-(outlayMoney.coffee.canu*(value.card-6));
  // 엔시나를 모두 저축하는데 성공했을때 더 절약하고 남은 카누 지출 금액
  if(value.card > 6 && saveEncina < 0 && saveEncina < 4500) {
    // 만약 원장님 카드를 6번 초과로 훔치면
    saveEncina = 0;
    // 엔시나는 걱정ㄴㄴ
    if(value.card > 21 && saveCanu < 0 && saveCanu < 200) {
      // 만약 원장님 카드를 21번 초과로 훔치면(어이구야....)
      saveCanu = 0;
      // 카누도 걱정ㄴㄴ ♥
    }
  }
  if(value.card < 6 && saveEncina > 0 && saveEncina > 4500) {
    // 만약 카드 훔친 횟수가 6회 미만이면
    saveCanu = canuMoney;
    // 카누비용은 아끼지 못한다 ㅇㅋ?
  }
  console.log("절약하고 남은 엔시나 비용", saveEncina);
  console.log("엔시나를 모두 절약하고 카누를 절약한 다음 남은 카누 비용", saveCanu);
  console.log(`${value.master}님의 카드를 총 21번 훔치면 커피값을 모두 절약해서 ${encinaMoney+canuMoney}원을 아낄 수 있음.`)

  if (saveKakao+saveTaxi+saveEncina+saveCanu <= 21600) {
    console.log("선생님 포켓몬 게임 쌉가능.")
    // 총 절약 비용이 21600원보다 적거나 같으면 포켓몬게임 쌉가능
    // 고양이값 제외하고 아꼈을때 포켓몬게임 할 수 있는 최소 지출 금액이 계산해보니 21600원
  }
  let fatigue = 0;
  // 피로도
  let hate = 0;
  // 미움지수
  for(let i = 0; i < value.timeCount; i++){
    if(value.time * value.timeCount != i){
      fatigue++
      // 일찍 일어난 횟수만큼 피로도 그 횟수만큼 같이 증가
    }
  }
  // 30분 단위로 횟수 --> 그 횟수만큼 피로도가 1씩 증가
  for(let i = 0; i < value.card; i++){
    hate++
    // 카드 훔친만큼 혐오증도 1씩 같이 생김
  }
  // 카드를 훔치는 만큼 늘어나는 미움지수
  return console.log(`${value.teacher}님은 잠을 ${value.time}분 단위로 ${value.timeCount}회 일찍 일어나면 피로도 수치가 ${fatigue}만큼 증가하고, ${value.master}님 카드를 ${value.card}번 훔치면 ${hate}만큼 미움받지만 포켓몬게임을 살 수 있게 됩니다.`) as any;
};
commingsoon1(answer);
// (주인공, 피해자, 일어나는 시간 단위, 카드 훔친 횟수, 일찍 일어난 횟수)