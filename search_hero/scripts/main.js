import { apiResponse } from "../scripts//API/api.js";
const button_search = document.querySelector(".btn-search");
export let value = getvalue;
button_search.addEventListener("click", getvalue);
function getvalue() {
    // @ts-ignore  
    const input = document.querySelector(".search_input").value;
    apiResponse(input);
}
