"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = void 0;

var _api = require("./API/api.js");

var button_search = document.querySelector(".btn-search");
var value = getvalue;
exports.value = value;
button_search.addEventListener("click", getvalue);

function getvalue() {
  // @ts-ignore
  var input = document.querySelector(".search_input").value;
  (0, _api.apiResponse)(input);
}