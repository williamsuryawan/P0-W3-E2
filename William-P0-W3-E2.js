function array1 (string) {
var jawaban ="";
for (var i=string.length-1; i>=0;i--){
  jawaban=jawaban+string[i];
}
return jawaban
}

console.log(array1("Hello World!"));