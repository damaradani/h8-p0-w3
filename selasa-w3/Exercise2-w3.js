function balikString(string){
  var hasil= '';
  for(i = 1; i <= string.length; i++){
    hasil += string[string.length - i];
  }
  return hasil;
}

console.log(balikString('Hello world!'));
