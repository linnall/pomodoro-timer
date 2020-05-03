var timers = document.getElementById('timers');
var timerb = document.getElementById('timerb');

var breakk; //TO BE SET
var study; //

chrome.storage.get(['work', 'break'], function(res){
    breakk = res.break;
    study = res.work;
});

var swatch = new Timer(timbers, study);
var bwatch = new Timer(timerb, breakk);

timers.addEventListener('click', function(){
    if (timers.on){
        swatch.stop();
    }else
    {
        swatch.start();
    }
});

timers.addEventListener('click', function(){
    swatch.reset();
});

//break
timerb.addEventListener('click', function(){
    if (timerb.on){
        bwatch.stop();
    }else
    {
        bwatch.start();
    }
});

timerb.addEventListener('click', function(){
    bwatch.reset();
});