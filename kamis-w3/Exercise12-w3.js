//Exercise 12 week 3 Logic Challenge - Tentukan Deret Geometri
//Deret geometri adalah sebuah deret dimana perbedaan
//setiap angka di deret tersebut konsisten secara perkalian

function tentukanDeretGeometri(arr){

  //Array baru untuk mengetahui selisih dari indeks 0 ke 1 dan seterusnya
  //dalam parameter 'arr'
  var arrHasilBagi = [];

  //digunakan di perulangan untuk perbandingan indeks1 dan indeks2
  var indeks2 = 1;

  //Pengulangan untuk menentukan perbedaan setiap angka/indeks di parameter 'arr'
  //dimana pengulangan akan terus terjadi sampai nilai i(0) < arr,length-1(4)
  for (var i = 0; i < (arr.length-1); i++){
    //memasukan hasil pembagian dari indeks2 = 1 dengan indeks 'i'=0 ke dalam 'arrHasilBagi'
    //output untuk array [1, 3, 9, 27, 81]
    arrHasilBagi.push(arr[indeks2]/arr[i]);
    //outputnya arr[1]/arr[0] > 3 / 1 = 3 ; arr[2]/arr[1] > 9 / 3 = 3
    indeks2++;
  }
  //return arrHasilBagi+'\n'+arr; // cek 'arrHasilBagi'
  //output dari 'arrHasilBagi' setelah pengulangan adalah [3, 3, 3, 3]

  //variabel untuk menampung hasil penjumlahan dari 'arrHasilBagi' value
  var afterTambah = 0;

  //Pengulangan untuk menjumlahkan semua isi dari 'arrHasilBagi'
  for (var j = 0; j < arrHasilBagi.length; j++){
    //hasil penambahan dimasukan ke 'afterTambah'
    afterTambah += arrHasilBagi[j];
    //outputnya 0 = 0+3 => 3
  }
  //value dari 'afterTambah' setelah pengulangan adalah 14

  //variabel untuk mencari perbedaan angka tiap value/indeks dari parameter 'arr'
  var selisihKali = afterTambah / arrHasilBagi.length;

  //digunakan di perulangan dibawah untuk perbandingan k dan indeks2
  indeks2 = 1;

  //pengulangan untuk menentukan apakah tiap value dari parameter 'arr'
  //apabila dikali 'selisihKali' hasilnya sama
  for (var k = 0; k < (arr.length-1); k++){
    //kondisi digunakan untuk mencari apakah arr[0]*selisihKali !== arr[1]
    //outputnya 1 * 3 tidak sama dengan 3 maka akan me-return false
    if(arr[k]*selisihKali !== arr[indeks2]){
      return false;
    }
    indeks2++;
  }
  //return afterTambah+' '+selisihKali;
  //apabila semua hasil pengulangan sesuai dengan kondisi di atas maka akan me-return true
  return true;

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


/* Function lebih simpel tanpa mengkalikan lagi
function tentukanDeretGeometri(arr){
  var arrHasil = [];
  var Indeks1 = 1;

  for (var i = 0; i < (arr.length-1); i++){
    arrHasil.push(arr[Indeks1]/arr[i]);
    Indeks1++;
  }

  Indeks1 = 1;
  for (var j = 0; j < (arrHasil.length-1); j++){
    if(arrHasil[j] !== arrHasil[Indeks1]){
      return false;
    }
  }
  return true;
}
*/
