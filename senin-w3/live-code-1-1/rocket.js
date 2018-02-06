// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
1 2 3
4 5 6
7 8 9
contoh 2 (drawThreeColsBox(5)):
1 2 3
4 5 6
7 8 9
10 11 12
13 14 15

contoh 3 (drawThreeColsBox(1)):
1 2 3
Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
function drawThreeColBox(height){
var hasil2 ='';
//var height =5;
var krang = height*3;
var arrNilai = [];
var arr1 = 0;
var arr2 = 1;
var arr3 = 2;
for (var nilai=1; nilai<=krang;nilai++){
  arrNilai.push(nilai);
}

for (height; height > 0; height--){
  hasil2 = arrNilai[arr1]+' '+arrNilai[arr2]+' '+arrNilai[arr3];
  console.log(hasil2);
  arr1 += 3;
  arr2 += 3;
  arr3 += 3;
  //return hasil2;
}

}

console.log(drawThreeColBox(4));
