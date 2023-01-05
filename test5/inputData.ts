interface numberFilter {
  (data: number): object[];
}

const inputData: object = [6, 2, 9, 8, 4, 0, 8, 5,  7, 1]; 
const sort = (data: numberFilter) => {
  let step = 0;
  for(let j = 1; j < data.length; j++) {
    for(let i = 0; i < data.length; i++){
      if(data[i] > data[i+1]){
        [[data[i]], [data[i+1]]] = [[data[i+1]], [data[i]]];
        step++;
      }
    }
  }
  let numberObject = {
    "one" : data[0],
    "two" : data[1],
    "three" : data[2],
    "four" : data[3],
    "five" : data[4],
  }
  console.log(step);
  console.log(numberObject);
}

sort(inputData);
