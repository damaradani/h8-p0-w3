//Exercise 10 week 3 Logic Challenge - Perkalian Unik
function perkalianUnik(arr){
  var hasilArr = [];// variabel untuk hasil array yang akan di tampilakn

  //Pengulangan untuk
  for(var i = 0; i < arr.length; i++){

    var newArr = [];//variabel untuk array baru supaya tidak terpengaruh fungsi splice

    //Pengulangan untuk memasukan value array baru dari parameter 'arr'
    for(var j = 0; j < arr.length; j++){
        //memasukan value ke dalam 'newArr' sesuai jumlah data parameter 'arr'
        newArr.push(arr[j]);
        //output 'newArr' untuk  isi parameter [2, 4, 6]
        //adalah [2, 4, 6]
    }

    /*splice di bawah digunakan untuk menghapus value dari 'newArr' dimana indeks 'i'
    **adalah posisi data dari 'newArr' mulai dari 0 sampai < arr.length
    **dan angka 1 adalah jumlah indeks yang akan di hapus
    */
    newArr.splice(i,1);
    //output newArr setelah splice di i = 0
    //adalah [4, 6]

    var hasilKali = 1;//menentukan nilai awal untuk hasil perkalian dari 'newArr' (harus 1)
                  //karena apabila nilai nya '0' maka semua hasil yang di kali akan 0

    //pengulangan untuk mengkalikan isi dari array newArr yaitu 4 * 6
    for(var k = 0; k < newArr.length; k++ ){

      hasilKali = hasilKali * newArr[k];
      //outputnya 1 = 1 * (newArr[0] yaitu 4)
    }

    //hasilArr.push(newArr)
    //memasuk hasil kali dari newArr dimana i = 0 ke dalam array hasilArr
    hasilArr.push(hasilKali);//yaitu 4*6
    //console.log(newArr);
  }

return hasilArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
