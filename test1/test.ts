const cone_volume1 = (r:number, h:number) => {
  let pi = 3.14;
  let radius = r**2;
  if(r >= 1 && r <= 100 && h >= 1 && h <= 100){
    return (pi*radius*h)/3;
  };
}
console.log(cone_volume1(5, 3));