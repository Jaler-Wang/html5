window.onload = function(){
    var ball = document.getElementById("ball");
    ball.onmousedown = function(){
        var thisBall = this;
        document.onmousemove = function(e){
            move(e, thisBall);
        }
    };

    function move(e, obj) {
        obj.style.left = e.clientX - obj.width/2 + "px";
        obj.style.top = e.clientY - obj.height/2 + "px";
    };
    document.onmouseup = function(){
        this.onmousemove = null;
    };
    ball.onmouseleave = function (){
        this.onmousemove = null;
    };
    ball.ondragstart = function(e){
        e.preventDefault();
    };
};
