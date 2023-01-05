// 함수 이름 : change_money
// 전개 1. 공미남은 기분좋게 KDT마트에 들렀습니다. 이것저것 먹고싶은 것을 골라담고 계산대 앞에 섰습니다.
// 전개 2. 살찔까봐 조금만 골랐는데, 34830원이 나왔습니다. 
// 전개 3. 공미남은 가지고 있는돈이 비상금 10만원권 수표밖에 없어 허락을 받은 후 지불하기로 하였습니다. 
// 전개 4. KDT캐셔는 총 65170원을 거스름돈으로 주어야 합니다. 
// 전개 5. 하지만, 불행히도 일천원권과 오천원권은 모두 소진된 상태입니다. 

// 출력 : key값은 화폐단위에 맞게 변경
// {
// 오만원권 : n개
// 일만원권 : n개
// 오백원동전 : n개
// 일백원동전 : n개
// 오십원동전 : n개
// 일십원동전 : n개
// }

// 문제 
// 조건 1. 가용한 최대 화폐단위를 최대한 활용해서 거슬러주어야 합니다.
// 조건 2: 오천원권 일천원권이 모두 소진 되었으므로, 대체방안을 마련해야 합니다.
// 조건 3: 다음 손님도 주문을 기다리고 있기 때문에, 다음 거슬러주어야 할 기능도 존재 해야 합니다.
// 조건 5: 다른 단위화폐가 소진된 상태인 경우도 대비할 수 있어야 합니다.

const money = {
  50000: true,
  10000: true,
  5000: false,
  1000: false,
  500: true,
  100: true,
  50: true,
  10: true,
}

const change_money1 = (getMoney, item, change) => {
  if(getMoney - item === change) {
    if(5000 === false && 1000 === false){

    }
  }
}
change_money1(100000, 34830, 65170);

const change_money = (getMoney, item) => {
  let change = getMoney - item;
  console.log(change);
  let count = [
    fiftyThousandCount = 0,
    // 50000
    tenThousandCount = 0,
    // 10000
    fiveHundredCount = 0,
    // 500
    oneHundredCount = 0,
    // 100
    fiftyCount = 0,
    // 50
    tenCount = 0,
    // 10
  ]
    while(change >= 50000) {
      count[0]++;
      change = change-50000;
    }
    while(change >= 10000) {
      count[1]++;
      change = change-10000;
    }
    while(change >= 500) {
      count[2]++;
      change = change-500;
    }
    while(change >= 100) {
      count[3]++;
      change = change-100;
    }
    while(change >= 50) {
      count[4]++;
      change = change-50;
    }
    while(change >= 10) {
      count[5]++;
      change = change-10;
    }
  console.log(count[0]);
  // 50000
  console.log(count[1]);
  // 10000
  console.log(count[2]);
  // 500
  console.log(count[3]);
  // 100
  console.log(count[4]);
  // 50
  console.log(count[5]);
  // 10
}
change_money(100000, 34830);