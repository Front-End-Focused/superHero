"use strict";
exports.__esModule = true;
exports.value = void 0;
var api_js_1 = require("../scripts//API/api.js");
var button_search = document.querySelector(".btn-search");
exports.value = getvalue;
button_search.addEventListener("click", getvalue);
function getvalue() {
    // @ts-ignore  
    var input = document.querySelector(".search_input").value;
    api_js_1.apiResponse(input);
}
