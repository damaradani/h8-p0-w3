//Exercise 6 week 3 Logic Challenge - Number palindrome
//palindrome angka atau kata yang jika dibalik hasilny tetap sama

function angkaPalindrome (num) {
  /*Kalo Pake Looping
  var reverseNum = String(num).split('').reverse().join('');

  if(num == reverseNum){
    for(let i = num+1; i >= num; i++){
        reverseNum = String(i).split('').reverse().join('');
        if(reverseNum == i){
            return i;
        }
    }
  }else{
      for(let i = num+1; i >= num; i++){
          reverseNum = String(i).split('').reverse().join('');
          if(reverseNum == i){
              return i;
          }
      }
  }
  */

  //Kalo pake Recursive
  //var reverseNum = String(num+1).split('').reverse().join('');
  num++;
  var numStr = String(num);
  var reverseNum = '';
  for(var i = numStr.length-1; i >= 0; i--){
      reverseNum += numStr[i];
  }

  if(reverseNum == num){
      return num;
  }else{
      return angkaPalindrome(num);
  }
  if(reverseNum == num){
      return num;
  }else{
      return angkaPalindrome(num);
  }

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
