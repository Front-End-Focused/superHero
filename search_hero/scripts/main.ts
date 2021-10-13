import { apiResponse } from "../scripts//API/api.js";
const button_search = document.querySelector<HTMLElement>(".btn-search");
export let value = getvalue
button_search.addEventListener("click", getvalue);

function getvalue(): void {
  // @ts-ignore  
  const input:string = document.querySelector<HTMLElement>(".search_input").value;
  apiResponse(input)
}

