const root = document.getElementById("root");
const xAxis = document.getElementsByClassName("axis_x");
const yAxis = document.getElementsByClassName("axis_y");
const price = document.getElementsByClassName("price");
const day = document.getElementsByClassName("day");
const chart = document.getElementsByClassName("chart");
console.log(chart.length);
const kdt_invest1: number[] = [
  2002, 1980, 1989, 1995, 2003, 2007, 2001, 2005, 1970, 1998,
];

const bar_chart1 = data => {
  const dummyData = [
    710.8, 830.3, 910.5, 760, 640.98, 590.75, 540.23, 480.73, 520.79, 610.4,
  ];
  data.sort();
  for (let i = 0; i < day.length; i++) {
    day[i].innerHTML = kdt_invest[i];
    chart[i].style.height = dummyData[i] + "px";
  }
};
bar_chart1(kdt_invest);
