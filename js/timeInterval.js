function CountDown(startValue, showValue){
    this.startValue = startValue;
    this.showValue = showValue;
    this.ref;

    this.start = function () {
        if(this.ref){
            this.stop();
        }
        console.info(this.startValue);
        var parent = this;
        this.ref = setInterval(function(){
            parent.decrease();
        }, 1000);
    };

    this.decrease = function () {
        if(this.startValue <= 0) return;
        this.showValue.innerHTML = --this.startValue;
    };
    this.stop = function(){
        clearInterval(this.ref);
    };
    this.continue = function () {
        this.start();
    }
}
window.onload=function(){

    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var continueButton = document.getElementById("continueButton");
    var countDown;

    startButton.onclick = function () {
        if(countDown){
            countDown.stop();
        }
        var inputValue = document.getElementById("inputValue").value;
        var showValue = document.getElementById("showValue");
        countDown = new CountDown(inputValue, showValue);
       countDown.start();
    };
    stopButton.onclick = function () {
        countDown.stop();
    };
    continueButton.onclick = function (ev) {
        countDown.continue();
    }
};