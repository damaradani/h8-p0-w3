var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(n){
  //menghapus 1 isi array 'arr' di index 1 yaitu 'Roman Alamsyah' dan menggantinya dengan value berikut:
  n.splice(1 , 1, "Roman Alamsyah Elsharawy" );

  //menghapus 1 isi array 'arr' di index 2 yaitu 'Bandar Lampung' dan menggantinya dengan value berikut:
  n.splice(2 , 1, "Provinsi Bandar Lampung" );

  //menghapus 1 isi array 'arr' di index 4 yaitu 'Membaca' dan menambahkan value baru di sebelah kanannya:
  n.splice(4, 1, "Pria", "SMA International Metro");

  //membuat array baru dari indeks 3 dari 'n' yaitu '21/05/1989' dan menjadikan karakter '/' sebagai pemisah
  var convertTanggal = n[3].split('/');

  //convert array 'convertTanggal' ke tipe data number
  var tglToNum = convertTanggal.map(Number);
  var bulan = '';//untuk digunakan di switch konversi bulan

  //Menjoint value 'ConvertTanggal' dengan memberi pemisah '-'
  var joinTanggal = convertTanggal.join('-');

  //Menampilkan index 1 dari array 'n' yaitu 'Roman Alamsyah Elsharawy' (dan menampilkan hasil dari index 0 ke 15)
  var sliceNama = n[1].slice(0, 15);

  //Mengkonversi angka di bulan menjadi huruf -> 1 = 'Januari' dst
  switch (tglToNum[1]) {
    case 1:
      bulan = 'Januari';
      break;
    case 2:
      bulan = 'Februari';
      break;
    case 3:
      bulan = 'Maret';
      break;
    case 4:
      bulan = 'April';
      break;
    case 5:
      bulan = 'Mei';
      break;
    case 6:
      bulan = 'Juni';
      break;
    case 7:
      bulan = 'Juli';
      break;
    case 8:
      bulan = 'Agustus';
      break;
    case 9:
      bulan = 'September';
      break;
    case 10:
      bulan = 'Oktober';
      break;
    case 11:
      bulan = 'November';
      break;
    case 12:
      bulan = 'Desember';
      break;
    default:
      bulan = 'Bulan hanya sampai 12!';
  }

  console.log(n);
  console.log(bulan);
  console.log(tglToNum.sort(function(v1,v2) {return v1 < v2}));//menampilkan value array 'tglToNum' secara urut dari terbesar > terkecil
  console.log(joinTanggal);
  console.log(sliceNama);
  return 'Berhasil!';
}

console.log(dataHandling2(arr));
