//Exercise 6 week 3 Logic Challenge - Number palindrome
//palindrome angka atau kata yang jika dibalik hasilny tetap sama

function angkaPalindrome (num) {
  var arrNum = '';
  arrNum += num;

  if(arrNum[0] === arrNum[arrNum.length - 1]){
    num += 1;
    for(var i = num; i >= arrNum; i++){
      var hasil = '';
      hasil += i;
      if (hasil[0] === hasil[hasil.length - 1]){
        //console.log(num);
        //console.log(arrNum2);
        return parseInt(hasil);
        //break;
      }

    }
  }else{
    //num += 1;
    for(var i = num; i >= arrNum; i++){
      var hasil = '';
      hasil += i;
      if (hasil[0] === hasil[hasil.length - 1]){
        //console.log(num);
        //console.log(arrNum2);
        return parseInt(hasil);
        //break;
      }
    }
  }
  //console.log(tes[0]+' tes '+tes[tes.length -1]);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
