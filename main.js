let display = document.getElementById('time'); //数値表示部の要素獲得し、変数(display)と定義
let starter = document.getElementById('start');
let stoper = document.getElementById('stop');
let reseter = document.getElementById('reset');

let timerId = null;
let elapsed = 0;

function timeTostring(timer){
  const ms = timer % 10
  const one = Math.floor(timer/ 1000) % 10;
  const ten= Math.floor(timer/ 1000 / 10) % 10;
  const hundret= Math.floor(timer/ 1000 / 100) % 10;

  return `${hundret}:${ten}:${one}:${ms}`
}


starter.addEventListener('click',function() {

  starter.disabled = true;
  reseter.disabled = true;

  let started = new Date();
    timerId = setInterval(function() {
    let current = Date.now();
    elapsed =  current - started;  
    
    display.textContent =  timeTostring(elapsed)

    }, 100);
});

stoper.addEventListener('click',function() {
  starter.disabled = false;
  reseter.disabled = false;
  clearInterval(timerId);
});

reseter.addEventListener('click',function() {

  display.textContent = `${0}:${0}:${0}:${0}` //表示部のDOMのテキストを書き換え
   
});