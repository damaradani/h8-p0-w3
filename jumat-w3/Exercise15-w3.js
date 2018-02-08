//Exercise 15 week 3 Logic Challenge - Mengelompokkan Hewan
function groupAnimals(animals){

  //variable array untuk menampung hasil pengelompokkan dari parameter 'animals'
  var arrHasil = [];

  //Mengurutkan value dari parameter 'animals' secara ascending / kecil > besar
  animals.sort(function(a, b){return a[0] > b[0]});
  //return a[0] > b[0] adalah untuk mengurutkan huruf depannya saja dari tiap value

  //variable untuk digunakan di kondisi bawah
  var Indeks0 = 0;

  //Pengulangan untuk Mengelompokkan Hewan apabila huruf depannya sama maka akan menjadi 1 kelompok
  //Perulangan akan terus berlangsung sampai nilai i=0 mencapai animals.length
  for (var i = 0; i < animals.length; i++){

    //kondisi untuk menentukan kelompok hewan
    if (arrHasil === undefined || arrHasil.length === 0 ){
      //apabila variable array 'arrHasil' masih kosong / belum ada isi maka :
      //masukan [animals[i]] ke dalam 'arrHasil'
      // [] di [animals[i]] digunakan untuk memasukan array baru
      arrHasil.push([animals[i]]);
      //contoh output ['ayam'] -> arrHasil = [['ayam']]

    }else if(arrHasil[Indeks0][0][0] === animals[i][0]) {
      //apabila huruf awal dari arrHasil[Indeks0][0][0] === animals[i][0]
      //output 'a' dari 'ayam' sama dengan 'a' dari 'anoa' maka
      arrHasil[Indeks0].push(animals[i]);
      //masukan animals[i] ke arrHasil[Indeks0]
      //output 'anoa' -> [['ayam']]
    }else{
      //apabila 2 kondisi di atas tidak terpenuhi maka
      arrHasil.push([animals[i]]);
      //memasukan isi array baru yaitu ['cacing'] ke arrHasil = [['ayam', 'anoa']]
      //output arrHasil menjadi [['ayam', 'anoa'], ['cacing']]

      Indeks0++; //setelah proses push selesai maka Indeks0 ditambah 1

    }

  }
  //Tampilkan array 'arrHasil'
  return arrHasil;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
