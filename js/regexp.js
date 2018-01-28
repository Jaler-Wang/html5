window.onload=function (ev) {
    var show = document.getElementById("show");
    var tmp = " "
    // var resultIndex = tmp.search(/C/g);
    var resultCharacter = tmp.match(/Jianle/ig);
    show.innerHTML = " resultCharacter: " + resultCharacter;
}