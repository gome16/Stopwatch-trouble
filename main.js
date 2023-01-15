let display = document.getElementById('time');
let starter = document.getElementById('start');
let stoper = document.getElementById('stop');
let reseter = document.getElementById('reset');

let timerId = null;
let elapsed = 0; //グローバル属性で変数(elapsed)を宣言


function timeTostring(timer){
  const ms = timer % 10
  const one = Math.floor(timer/ 1000) % 10;
  const ten= Math.floor(timer/ 1000 / 10) % 10;
  const hundret= Math.floor(timer/ 1000 / 100) % 10;

  return `${hundret}:${ten}:${one}:${ms}`
}


starter.addEventListener('click',function() {

  starter.disabled = true
  

  let started = new Date();
    timerId = setInterval(function() {
    let current = Date.now();
    elapsed =  current - started;  //グローバル変数(elapsed)に経過時間処理を格納
    
    display.textContent =  timeTostring(elapsed)
    }, 100);
});

stoper.addEventListener('click',function() {
  starter.disabled = false
  clearInterval(timerId)
});

reseter.addEventListener('click',function() {
   elapsed = 0; //グローバル変数(elapsed)を参照したい場所
  
});