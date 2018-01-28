window.onload=function (ev) {
    var createCookie = document.getElementById("createCookie");
    var deleteCookie = document.getElementById("deleteCookie");

    createCookie.onclick = function () {
        var exprationDateOfCookie = new Date();
        exprationDateOfCookie.setDate(exprationDateOfCookie.getDate() + 1);
        document.cookie = "wang=jianle;path=/;expires="+exprationDateOfCookie.toUTCString();
        document.cookie = "liu=fangjun;";
    }

    deleteCookie.onclick = function () {
        var exprationDateOfCookie = new Date();
        exprationDateOfCookie.setDate(exprationDateOfCookie.getDate() - 1);
        document.cookie = "wang=;path=/;expires="+exprationDateOfCookie.toUTCString();
    }
};