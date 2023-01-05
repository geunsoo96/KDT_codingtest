def change_money(getMoney, item):
  change = getMoney - item
  print(change)
  # 거스름돈 공식
  fiftyThousandCount = 0
  tenThousandCount = 0
  fiveHundredCount = 0
  oneHundredCount = 0
  fiftyCount = 0
  tenCount = 0
  # 화폐 count
  while change >= 50000:
    fiftyThousandCount += 1
    change = change-50000
  print(fiftyThousandCount)
  # 5만원
  while change >= 10000:
    tenThousandCount += 1
    change = change-10000
  print(tenThousandCount)
  # 1만원
  while change >= 500:
    fiveHundredCount += 1
    change = change-500
  print(fiveHundredCount)
  # 500원
  while change >= 100:
    oneHundredCount += 1
    change = change-100
  print(oneHundredCount)
  # 100원
  while change >= 50:
    fiftyCount += 1
    change = change-50
  print(fiftyCount)
  # 50원
  while change >= 10:
    tenCount += 1
    change = change-10
  print(tenCount)
  # 10원
change_money(100000, 34830)