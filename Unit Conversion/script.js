/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function LengthConverter(valNum) {
  document.getElementById("mTof").innerHTML=`${valNum} meter(s) is around ${Math.floor(valNum * 3.2808)} feet(s)`;
  document.getElementById("lTog").innerHTML=`${valNum} liter(s) is around ${Math.floor(valNum / 0.254)} gallon(s)`;
  document.getElementById("kTop").innerHTML=`${valNum} kilogram(s) is around ${Math.floor(valNum * 2.204)} pound(s)`;
}