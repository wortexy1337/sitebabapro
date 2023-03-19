"use strict";
if (document.referrer) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("POST", "/site.ac/counter-set.js", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("t=2023.03.19 19:33:07&h=erencaglar.tic.tc&i=95.173.234.98&r=" + document.referrer);
}