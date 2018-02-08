//Exercise 14 week 3 Logic Challenge - Mengelompokkan angka
function mengelompokkanAngka(arr){
  
  //variable untuk mengisi hasil array dari parameter 'arr'
  //dan dibuat 3 indeks sesuai ketentuan soal yaitu sesuai 3 kategori
  var arrHasil = [[],[],[]];

  //Pengulangan untuk memanggil value dari tiap indeks dari parameter 'arr'
  for (var i = 0; i < arr.length; i++){

    //kondisi untuk Mengelompokkan angka
    if (arr[i] % 3 === 0){
      //apabila arr[i] modulo 3 hasilnya 0 maka
      arrHasil[2].push(arr[i]);
      //masukan arr[i] tersebut ke array 'arrHasil' di Indeks 2
    }else if(arr[i] % 2 !== 0){
      //apabila arr[i] modulo 2 hasilnya tidak sama dengan 0 maka
      arrHasil[1].push(arr[i]);
      //masukan arr[i] tersebut ke array 'arrhasil' di Indeks 1
    }else {
      //apabila dua kondisi di atas belum terpenuhi maka
      arrHasil[0].push(arr[i]);
      //masukan arr[i] tersebut ke array 'arrHasil' di Indeks 0
    }

  }
  //Tampilkan Array 'arrHasil'
  return arrHasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
