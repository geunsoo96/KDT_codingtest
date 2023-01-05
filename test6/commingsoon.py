def commingsoon (teacher, master, time, card, timeCount):
  outlayMoney = {
    'commute' : {
      'kakao' : 1500,
      'taxi' : 3500,
    },
    'coffee' : {
      'encina' : 4500,
      'canu' : 200,
    },
    'cat' : {
      'chicken' : 400,
      'milk' : 800
    }
  }
  outlayHistory = {
    'commute' : {
      'kakao' : 19,
      'taxi' : 3,
    },
    'coffee' : {
      'encina' : 6,
      'canu' : 15,
    },
    'cat' : {
      'chicken' : 30,
      'milk' : 2
    }
  }
  kakaoMoney = outlayMoney['commute']['kakao']*outlayHistory['commute']['kakao']
  taxiMoney = outlayMoney['commute']['taxi']*outlayHistory['commute']['taxi']
  encinaMoney = outlayMoney['coffee']['encina']*outlayHistory['coffee']['encina']
  canuMoney = outlayMoney['coffee']['canu']*outlayHistory['coffee']['canu']
  chickenMoney = outlayMoney['cat']['chicken']*outlayHistory['cat']['chicken']
  milkMoney = outlayMoney['cat']['milk']*outlayHistory['cat']['milk']

  KongMiNamMoney = 100000
  pokemonGame = 64800
  totalNomalMoney = kakaoMoney+taxiMoney+encinaMoney+canuMoney+chickenMoney+milkMoney
  print("현재 전체 지출 비용 합계", totalNomalMoney)
  print("현재 출퇴근 비용", kakaoMoney+taxiMoney)
  print("현재 커피 비용", encinaMoney+canuMoney)

  saveKakao = kakaoMoney-(outlayMoney['commute']['kakao']*timeCount)
  saveTaxi = taxiMoney-(outlayMoney['commute']['taxi']*(timeCount-19))
  if(timeCount > 19 and saveKakao < 0 and saveKakao < 1500):
    saveKakao = 0
    if(timeCount > 22 and saveTaxi < 0 and saveTaxi < 3500):
      saveTaxi = 0
  if(timeCount < 19 and saveKakao > 0 and saveKakao > 1500):
    saveTaxi = taxiMoney
  print("절약하고 남은 카카오자전거비용", saveKakao)
  print("자전거 모두 절약하고 택시를 절약해서 남은 금액", saveTaxi)
  print("총 22번 일찍 일어나면 자전거와 택시비를 모두 절약해서", kakaoMoney+taxiMoney, "원을 전부 아낄 수 있음.")

  saveEncina = encinaMoney-(outlayMoney['coffee']['encina']*card)
  saveCanu = encinaMoney-(outlayMoney['coffee']['canu']*(card-6))
  if(card > 6 and saveEncina < 0 and saveEncina < 4500):
    saveEncina = 0
    if(card > 22 and saveCanu < 0 and saveCanu < 200):
      saveCanu = 0
  if(card < 6 and saveEncina > 0 and saveEncina > 4500):
    saveCanu = canuMoney
  print("절약하고 남은 엔시나 비용", saveEncina)
  print("엔시나를 모두 절약하고 카누를 절약한 다음 남은 카누 비용", saveCanu)
  print(master, "님의 카드를 총 21번 훔치면 커피값을 모두 절약해서", encinaMoney+canuMoney, "원을 전부 아낄 수 있음.")

  if(saveKakao+saveTaxi+saveEncina+saveCanu <= 21600):
    print("선생님 포켓몬 게임 쌉가능")
  
  fatigue = 0
  hate = 0

  for i in range(timeCount):
    if(time * timeCount != i):
      fatigue += 1
    
  for i in range(card):
    hate += 1

  return print(teacher, "님은 잠을", time, "분 단위로", timeCount, "회 일찍 일어나면 피로도 수치가", fatigue, "만큼 증가하고,", master, "님 카드를", card, "번 훔치면", hate, "만큼 미움 받지만 포켓몬게임을 살 수 있게 됩니다.")
  
commingsoon('공욱재', '원장', 30, 15, 15)