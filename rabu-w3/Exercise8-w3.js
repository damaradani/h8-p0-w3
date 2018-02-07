//Exercise 8 week 3 Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num){
    var arrNum = '';
    arrNum += num;
    var Indeks1 = 0;
    var Indeks2 = 1;
    var arrHasil = [];

    for(var i = Indeks2; i < arrNum.length; i++){
      arrHasil.push(arrNum[Indeks1]+arrNum[Indeks2]);
      //arrHasil.push(arrNum[Indeks2]);
      Indeks1++;
      Indeks2++;
    }
    var hasilSort = arrHasil.sort(function(v1,v2){return v1 > v2}).map(Number);
    return  typeof(hasilSort[hasilSort.length -1]);
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
