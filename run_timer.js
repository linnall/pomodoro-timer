var timers = document.getElementById('timers');
var timerb = document.getElementById('timerb');
var s = document.getElementById('start');
var swatch;
var bwatch;

timesData = {};
var work;
var breakk;


chrome.storage.sync.get('data', function(res) {
    if (res) {
        timesData = res;
        work = res.work;
        breakk = res.break;
    } else {
        timesData = {work: 25, break: 5};
        work = 25;
        breakk = 5;
    }
});

//var breakk = 5;
//var work = 25; //

var work = timesData

function ensureRun(time, callback){
    time();
    bwatch = new Timer(timerb, breakk);
    callback();
}


s.addEventListener('click', function(){

    /*chrome.storage.synch.get(['work', 'break'], function(res){
        breakk = res.break;
        study = res.work;*/
        console.log("it idid it");

        timers.textContent = study + " : " + "00";
        timerb.textContent = breakk + " : " + "00";
    

    swatch = new Timer(timers, study);

    if (swatch.on){
        swatch.stop();
    }else
    {
        swatch.start();

        if (swatch.done){
            bwatch = new Timer(timerb, breakk);
            bwatch.start();
        }
    }

});

