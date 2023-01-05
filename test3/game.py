import math
def game_money(item, hour):
  gold = math.floor(item / 2)
  copper = (item % 2) * 16
  print("이날 공미남 플레이어가 한시간 동안 플레이로 얻은 gold의 갯수는", gold, "개 입니다.")
  print("gold를 제외한 나머지 값어치는 모두 cooper로 바꾸어놓아, 총", copper, "개의 copper를 챙겼습니다.")
  totalItem = item * hour
  totalGold = math.floor(totalItem / 2)
  totalCopper = (totalItem % 2) *16
  print("공미남 플레이어는 한시간으로 게임을 끝내지 않고 장장 8시간 플레이하여 총", totalGold, "gold,",totalCopper,"copper를 얻었습니다.")

game_money(45, 8)