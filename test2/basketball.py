def score_analysis(total, three, freeChance):
  threePoint = three*3
  notThree = total-threePoint
  twoSuccess = (notThree/2)*(50/100)
  freeSuccess = (notThree/2)*(50/100)
  freeSuccessPer = freeSuccess/freeChance*100
  print("KDT팀이 이날 성공한 2점슛은 총", twoSuccess,"회 입니다.")
  # 9
  print("그리고 상대팀으로부터 자유투를", freeChance, "번 획득해, 총", freeSuccess, "개의 자유투를 성공하였습니다.")
  # 50, 9
  print("이날 KDT팀의 자유투 성공률은", freeSuccessPer, "% 입니다.")
  # 18

score_analysis(84, 16, 50)