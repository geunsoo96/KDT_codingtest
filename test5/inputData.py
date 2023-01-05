inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
# print(range(len(inputData)-2))
def sort(data):
  step = 0
  for j in range(len(data)-2):
    j + 2 
    for i in range(len(data)-1):
      i + 1
      if data[i] > data[i+1]:
        [[data[i]], [data[i+1]]] = [[data[i+1]], [data[i]]]
        step = step + 1
  numberObject = {
    "one" : data[0],
    "two" : data[1],
    "three" : data[2],
    "four" : data[3],
    "five" : data[4],
  }
  print(step)
  # 26
  print(numberObject)
  # { one: 0, two: 1, three: 2, four: 4, five: 5 }

sort(inputData)