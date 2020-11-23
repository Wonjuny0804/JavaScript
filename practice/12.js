
for ( var i = 0; i < 5; i++ ){
  var star = '';
  for ( var j = 0; j < i; j++ ){
    star += ' ';
  }
  for ( var k = 5-i; k > 0; k-- ){
    star += '*';
  }
  console.log(star);
}