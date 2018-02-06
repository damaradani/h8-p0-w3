var animalsArray = ["lion", "horse", "eagle"];
animalsArray.push("duck"); // menambahkan 1 nilai ke array bagian paling belakang
console.log(animalsArray); // ["lion", "horse", "duck"]
animalsArray.pop(); // menghapus 1 nilai array terbelakang
console.log(animalsArray); // ["lion", "horse"]
animalsArray.unshift("dog");
console.log(animalsArray); // ["dog", "lion", "horse"]
animalsArray.shift();
console.log(animalsArray);  // ["lion", "horse"]
animalsArray.sort();
console.log(animalsArray);  // ["horse", "lion"]
console.log(animalsArray.join(" and ")); // "horse and lion"
console.log('================\n');

var arr = [0, 1, 2, 3];
arr.push(4);
console.log(arr); // 0, 1, 2, 3, 4

var arr = [0, 1, 2, 3];
arr.pop();
console.log(arr); // 0, 1, 2

var arr = [0, 1, 2];
arr.unshift(3);
console.log(arr); // 3, 0, 1, 2

var arr = [3, 0, 1, 2];
arr.shift();
console.log(arr); // 0, 1, 2

console.log('\nMenggunakan sort:');
var arr = [3, 5, 7, 1, 2];
arr.sort();
console.log(arr); // 1, 2, 3, 5, 7

var arrChar = ['Tono', 'Budi', 'Charlie', 'Ahmad'];
arrChar.sort();
console.log(arrChar); // 'Ahmad', 'Budi', 'Charlie', 'Tono'

var arr = [1, 2, 15];
arr.sort();
console.log(arr); // 1, 15, 2

var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 > value2 });
console.log(arr); // 1, 2, 15

console.log('\nMenggunakan slice :');
var arr = [0, 1, 2, 3, 4];
var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
console.log(irisan1); // [1, 2]
var irisan2 = arr.slice(1);
console.log(irisan2); // [1, 2, 3, 4]
var irisan3 = arr.slice(2, 3);
console.log(irisan3); // [2]
var irisan4 = arr.slice(2, 2);
console.log(irisan4); // [] KOSONG!

console.log('\nMenggunakan splice:');
var arr = ["buku", "laptop", "komputer"];
arr.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
console.log(arr); // ["buku", "laptop", "televisi", "komputer"]

arr.splice(0, 2); // Menghapus 2 nilai dari index 0
console.log(arr); // ["televisi", "komputer"]

arr.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
console.log(arr); // [majalah", "koran", "komputer"]

console.log('\nMenggunakan split:');
var kalimat = "saya, adalah, full-stack, javascript, programmer!";
var kata = kalimat.split(","); // kalimat dipecah dengan separator berupa spasi.
console.log(kata); // ["saya", "adalah", "full-stack", "javascript", "programmer!"]
