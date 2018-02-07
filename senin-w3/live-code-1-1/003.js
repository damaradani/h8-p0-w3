// Competencies: Loopings
/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
3
32
321

contoh 2 (height = 5):
5
54
543
5432
54321

contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var height = 5; // isi dengan nilai tinggi tangga!
var rows = height;
var hasil = '';
while(rows > 0){
  hasil += height;
  console.log(hasil);
  rows--;
  height--;
}

//Versi Nested Loopings dari Terbesar sampai terkecil
console.log('================');
var height2 = 5;

for(var i = 1; i <= height2; i++){
  var hasil2 = '';
  var nilai = height2;

  for(var j = 1; j <= i; j++){
    hasil2 += nilai;
    nilai--;
  }
  console.log(hasil2);

}
