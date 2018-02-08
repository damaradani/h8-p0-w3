//Exercise 9 week 3 Logic Challenge - Mencari Mean
//Tanpa Menjumlahkan semua hasil terlebih dahulu
function cariMean(arr){
  arr.sort(function(v1, v2){return v1 > v2});
  var cariHasil = (arr[0]+arr[arr.length - 1]) / 2;
  return Math.round(cariHasil);
}

//function cari mean dengan menjumlahkan
//semua value array dan membaginya dengan jumlah isi array
function cariMean2(arr2){
  var hasil = 0;
  for(var i = 0; i < arr2.length; i++){
    hasil += arr2[i];
  }
  return Math.round(hasil / arr2.length);
}


// TEST CASES
console.log(cariMean2([1, 2, 3, 4, 5])); // 3
console.log(cariMean2([3, 5, 7, 5, 3])); // 5
console.log(cariMean2([6, 5, 4, 7, 3])); // 5
console.log(cariMean2([1, 3, 3])); // 2
console.log(cariMean2([7, 7, 7, 7, 7])); // 7

//Test case di atas 10
console.log(cariMean2([10,13,14,17]));
