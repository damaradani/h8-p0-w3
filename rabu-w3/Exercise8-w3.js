//Exercise 8 week 3 Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num){

  var Indeks1 = 1;
  var numStr = String(num);
  var arrNum = [];

  for (i = 0; i < (numStr.length-1); i++){
      arrNum.push(numStr[i]+numStr[Indeks1]);
      Indeks1++;
  }

  var arrNumSort = arrNum.sort(function(a,b) {return a < b});
  return arrNumSort[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
