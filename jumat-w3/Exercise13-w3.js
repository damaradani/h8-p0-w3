//Exercise 13 week 3 Logic Challenge - Target Terdekat
function targetTerdekat(arr){
  //variable array untuk menampung lokasi 'x' dari parameter 'arr'
  var arrX = [];

  //variable array untuk menampung lokasi 'o' dari parameter 'arr'
  var arrO = [];

  //variable untuk menampilkan hasil jarak berupa angka
  var hasil = 0;

  //Pengulangan untuk mencari dimana lokasi indeks dari 'o' dan 'x'
  for (var i = 0; i < arr.length; i++){

    //kondisi untuk mencari lokasi indeks dari 'o' dan 'x'
    if(arr[i] === 'o'){
      //apabila nilai 'o' ketemu masukan nomor indeks dari 'o' kedalam 'arrO'
      arrO.push(i);
    }else if (arr[i] === 'x') {
      //apabila nilai 'x' ketemu masukan nomor indeks dari 'x' kedalam 'arrX'
      arrX.push(i);
    }
  }
  //output dari arrX dan arrO setelah pengulangan selesai adalah:
  //contoh parameter 'arr' yang dipakai adalah ['', '', 'o', '', '', 'x', '', 'x']
  //arrX = [5, 7]
  //arrO = [2]

  //kondisi untuk membandingkan nilai dari arrX dan arrO
  if(arrO[0] > arrX[0]){
    //apabila arrO[0]=2 lebih besar dari arrX[0]=5
    //maka masukan pengurangan arrO[0] - arrX[arrX.length-1] ke variable hasil
    hasil = arrO[0] - arrX[arrX.length-1];
    //output 0 = 2 - 7 => -5
  }else if(arrO[0] < arrX[0]){
    //apabila arr[0]=2 lebih kecil dari arrX[0]=5
    //maka masukan pengurangan arrX[0] - arrO[0] ke variable hasil
    hasil = arrX[0] - arrO[0];
    //output 0 = 5 - 2 => 3
  }else{
    //apabila salah satu dari 'x' ato 'o' tidak ada di dalam parameter 'arr'
    hasil = 0;
    //maka variable hasil diisi dengan 0
  }
  return hasil;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
