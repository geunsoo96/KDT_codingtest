
const score_analysis1 = (total:number, three:number, freeChance:number) => {
  if(Number.isInteger(total)
  && Number.isInteger(three) === true
){
    let threePoint = three*3;
    let notThree = total-threePoint;
    // 36
    let twoSuccess = (notThree/2)*(50/100);
    // 3점슛 점수를 제외한 점수에 자유투와 2점슛으로 얻은 점수의 비율이 50%
    let freeSuccess = (notThree/2)*(50/100);
    // 위에 2점슛 성공횟수 계산과 동일
    let freeSuccessPercentage = freeSuccess/freeChance*100;
    // 자유투 성공률 백분위 계산
    console.log(notThree);
    console.log(twoSuccess);
    console.log(`KDT팀이 이 날 성공한 2점슛은 총 ${twoSuccess}회 입니다.`)
    console.log(`그리고 상대팀으로부터 자유투를 ${freeChance}번 획득해, 총 ${freeSuccess}개의 자유투를 성공하였습니다.`)
    console.log(`이날 KDT팀의 자유투 성공률을 ${freeSuccessPercentage}%입니다.`)
  }
  return 
}
score_analysis1(84, 16, 50);
// 자유투를 얻은 횟수는 인자를 만들어서 직접 임의의 인수값을 넣는 방식 채택

