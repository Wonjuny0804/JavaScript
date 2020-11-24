var star = '';
var line = 5;
for (var i; i < line; i++){
  for( var j = line-1-i; j > 0; j--){
    star += ' ';
  } 
  for(var k = 0; k < 2*i+1; k++){
    star += '*';
  }
  for( var l = line-1-i; l > 0; l--){
    star += ' ';
  }
  star += '\n';
}
console.log(star);
console.log(line);