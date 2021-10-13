const btn_theme: HTMLElement = document.querySelector(".circle");
let button_h_radius_off: HTMLElement = document.querySelector(
  ".button_h_radius_off"
);

button_h_radius_off.addEventListener("click", function (event):void {
  if (btn_theme.parentElement.className == "button_h_radius_off") {
    btn_theme.parentElement.className = "button_h_radius_on";
    document.querySelector<HTMLElement>(
      ".container_main"
    ).style.backgroundColor = "#fff";
    document.querySelector<HTMLElement>(".search_description").style.color =
      "#000";
    document.querySelector<HTMLElement>(".search_input").style.color = "#fff";
    document.querySelector<HTMLElement>(".btn-search").style.color = "#fff";
    document.querySelector<HTMLElement>(".search_input").style.backgroundColor =
      "#000";
  } else {
    btn_theme.parentElement.className = "button_h_radius_off";
    document.querySelector<HTMLElement>(
      ".container_main"
    ).style.backgroundColor = "#222629";
    document.querySelector<HTMLElement>(".search_description").style.color =
      "#86c232";
    document.querySelector<HTMLElement>(".btn-search").style.color = "#474b4f";
    document.querySelector<HTMLElement>(".search_input").style.backgroundColor =
      "#474b4f";
  }
});
