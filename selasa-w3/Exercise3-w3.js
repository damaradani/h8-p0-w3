//Exercise 3: Tantangan Array 2 (Melooping menggunaka Array)

var input = [
              ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
              ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
              ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
              ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
          ]

function dataHandling(n){
  for(var i = 0; i < n.length; i++ ){
    console.log('Nomor ID: '+n[i][0]);
    console.log('Nama Lengkap: '+n[i][1]);
    console.log('TTL : '+n[i][2]+' '+n[i][3]);
    console.log('Hobi : '+n[i][4]+'\n');

  }
  /*console.log('Nomor ID: '+input[0][0]);
  console.log('Nama Lengkap: '+input[0][1]);
  console.log('TTL :'+input[0][2]+' '+input[0][3]);
  console.log('Hobi :'+input[0][4]+'\n');*/
  return "Data Handling Berhasil!";
}

console.log(dataHandling(input));
