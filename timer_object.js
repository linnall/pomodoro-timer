function Timer(elem, settime){

    //elem.textContent = settime.toString() + " : " + "00";

    var time = settime*60000;
    //serve as ID returned by setInterval() to clear it
    var interval;
    var diff;
    this.done = false;

    //PRIVATE FUNCTIONS
    //update the time displayed by timer
    function update(){
        if (time == 0){
            this.done = true;
        }else{
            time -= timepassed();
            var timeconverted = timeConversion(time);
            elem.textContent = timeconverted;
        }
        
    }

    //calculates & returns time passed
    function timepassed(){
        var now = Date.now();       //number of milliseconds since base date that have passed
        var newdiff = now - diff;
        diff = now;
        return newdiff;
    }

    function timeConversion(init){

        var m = time.getMinutes().toString();
        var s = time.getSeconds().toString();

        if (m.length < 2){
            m = '0' + m;
        }

        if (s.length < 2){
            s = '0' + s;
        }

        return m + " : " + s;
    }


    this.on = false;

    this.start = function(){
        if (!this.on && !this.done){
            interval = setInterval(update, 10);
            diff = Date.now();
            this.on = true;
        }
    };

    this.stop = function(){
        if (this.on){
            clearInterval(interval);
            interval = null;
            this.on = false;
        }
    };

    this.reset = function(){
        time = settime;
        this.done = false;
    };
}