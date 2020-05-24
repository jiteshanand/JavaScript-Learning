const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#startBtn');
const pauseButton = document.querySelector('#pauseBtn');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(){
        totalDuration = durationInput.value;
    },
    onTick(timeLeft){
        circle.setAttribute('stroke-dashoffset', perimeter * timeLeft / totalDuration - perimeter);

    },
    onComplete(){
        console.log("completed");
    }
});