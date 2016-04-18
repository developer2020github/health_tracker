//========================================================
//Health tracker
//2016
//Author:  developer2020 
//e-mail:  dev276236@gmail.com
//========================================================
//this module contains common library functions that do not 
//fit any other component of the application

//---------------------------------------------------------
//http://stackoverflow.com/questions/247483/http-get-request-in-javascript
//This  function performs a simple GET request and calls 
//callback_ok if it worked. Otherwise, callback_error is called in 
//5 seconds 
function httpGetAsync(theUrl, callback_ok, callback_error) {
    var xmlHttp = new XMLHttpRequest();
    var timeoutHandle = window.setTimeout(callback_error, 5000);
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback_ok(xmlHttp.responseText);
            window.clearTimeout(timeoutHandle);
        } 
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
