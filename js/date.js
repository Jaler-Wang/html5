window.onload = function(){
    var div = document.createElement("div");
    div.innerHTML = new Date();
    var body = document.getElementById("date");
    body.appendChild(div);
};