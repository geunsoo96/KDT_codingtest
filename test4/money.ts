const change_money3 = (getMoney:number, item:number) => {
  let change = getMoney - item;
  console.log(change);

  let fiftyThousandCount = 0;
    // 50000
  let tenThousandCount = 0;
    // 10000
  let fiveHundredCount = 0;
    // 500
  let oneHundredCount = 0;
    // 100
  let fiftyCount = 0;
    // 50
  let tenCount = 0;
    // 10

    while(change >= 50000) {
      fiftyThousandCount++;
      change = change-50000;
    }
    console.log(fiftyThousandCount);
    // 50000
    while(change >= 10000) {
      tenThousandCount++;
      change = change-10000;
    }
    console.log(tenThousandCount);
    // 10000
    while(change >= 500) {
      fiveHundredCount++;
      change = change-500;
    }
    console.log(fiveHundredCount);
    // 500
    while(change >= 100) {
      oneHundredCount++;
      change = change-100;
    }
    console.log(oneHundredCount);
    // 100
    while(change >= 50) {
      fiftyCount++;
      change = change-50;
    }
    console.log(fiftyCount);
    // 50
    while(change >= 10) {
      tenCount++;
      change = change-10;
    }
  console.log(tenCount);
  // 10
}
change_money3(100000, 34830);