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

JSONTest = function() {

    var resultDiv = $("#resultDivContainer");
    data = {
  "appId": "YOUR_APP_ID",
  "appKey": "YOUR_APP_KEY",
  "fields": [
    "item_name",
    "brand_name",
    "nf_calories",
    "nf_sodium",
    "item_type"
  ],
  "offset": 0,
  "limit": 50,
  "sort": {
    "field": "nf_calories",
    "order": "desc"
  },
  "min_score": 0.5,
  "query": "starbucks AND frap*",
  "filters": {
    "not": {
      "item_type": 2
    },
    "nf_calories": {
      "from": 0,
      "to": 400
    }
  }
}
    $.ajax({
        url: "https://example.com/api/",
        type: "POST",
        data: { apiKey: "23462", method: "example", ip: "208.74.35.5" },
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    resultDiv.html(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
};