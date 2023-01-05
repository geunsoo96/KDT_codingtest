lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
lineTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
lineThr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
lineFou1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
lineFiv1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

def bingo (one, two, three, four, five):
  array = [one, two, three, four, five]
  for i in range(array):
    for j in range(array[i]):
      if(array[i][j] == 0 | array[i][j] == 1):
        print(array[i])
        print("게임진행")
        if(array[0][j] == 1 and array[1][j] == 1 and array[2][j] == 1 and array[3][j] == 1 and array[4][j] == 1):
          del array[0][j:1]
          del array[1][j:1]
          del array[2][j:1]
          del array[3][j:1]
          del array[4][j:1]
          if(array[i].length == 0):
            print("승리")
      else:
        print("앙대용")

bingo(lineOne1, lineTwo1, lineThr1, lineFou1, lineFiv1)