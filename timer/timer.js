class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onComplete = callbacks.onComplete;
            this.onTick = callbacks.onTick;
        }
    }

    start = () => {
        console.log("Starting the timer");
        if(this.onStart){
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick,50);
    }

    pause = () => {
        clearInterval(this.interval);
        console.log("Paused the timer");
    }

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }
        else{
            this.timeRemaining = this.timeRemaining - 0.05;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }
    
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2) ;
    }

}