//Exercise 11 week 3 Logic Challenge - Tentukan Deret Aritmatika
//Deret aritmatika adalah sebuah deret dimana
//perbedaan setiap angka di deret tersebut konsisten.
function tentukanDeretAritmatika(arr){

  //di gunakan di perulangan untuk perbandingan indeks1 dan indeks2
  var indeks2 = 1;

  //membuat array baru untuk hasil pengurangan di tiap indeks
  var arrHasilKurang = [];

  //Pengulangan untuk mengurangi nilai dari tiap 2 indeks
  for (var i = 0; i < (arr.length-1); i++){
    //memasukan hasil pengurangan ke dalam array 'arrHasilKurang'
    arrHasilKurang.push(arr[indeks2]-arr[i]);
    //output untuk i = 0 / indeks 0 dan 1 dari parameter arr yaitu
    //[1, 2, 3, 4, 5, 6] adalah 2 - 1
    //output untuk i = 1 / indeks 1 dan 2 dari parameter arr yaitu
    //[1, 2, 3, 4, 5, 6] adalah 3 - 2 dst
    indeks2++; //menambahkan nilai indeks2 = 1 + 1 > 2
  }
  //output dari arrHasilKurang setelah push
  //[1, 1, 1, 1, 1]

  //Menset value dari Indeks1 & 2 yang sudah bertambah di looping sebelumnya
  indeks2 = 1;

  //Pengulangan untuk mencari apabila tiap value dari array 'arrHasilKurang'
  //adalah sama
  for (var j = 0; j < (arrHasilKurang.length-1); j++){

    //kondisi digunakan untuk membandingkan apabila indeks1 & 2 dari 'arrHasilKurang'
    //nilainya tidak sama maka akan me-return false
    //dan apabila hasil perbandingan sama maka akan melakukan looping untuk
    //indeks selanjutnya sampai indeks terakhir
    if (arrHasilKurang[j] !== arrHasilKurang[indeks2]){
      return false;
    }

    indeks2++;

  }
  //apabila setelah looping semua nilai dari 'arrHasilKurang' masih sampai
  //maka akan me-return true
  return true;

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
