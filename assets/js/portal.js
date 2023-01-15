var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');                              

function randomStr(len, arr) {
  var ans = 'Current portal : ';
  for (var i = len; i > 0; i--) {
    ans +=
    arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}

function randomStr2(len, arr) {
  var ans2 = '.dim ';
  for (var i = len; i > 0; i--) {
    ans2 +=
    arr[Math.floor(Math.random() * arr.length)];
  }
  return ans2;
}

function GFG_Fun() {
  down.innerHTML = randomStr(7, 'abcdefghijkmlnopqrstuvwxyz0123456789' + '.') + randomStr2(3, '0123456789');
        
}
