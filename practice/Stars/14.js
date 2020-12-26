for ( var i = 0; i < 5; i++ ){
  var star = '';
  for ( var j = 5-i; j > 0 ; j-- ){
    star += ' ';
  }
  for ( var k = 0; k < i+1; k++ ){
    star += '*';
  }
  console.log(star);
}