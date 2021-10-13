const btn_theme = document.querySelector(".circle");
let button_h_radius_off = document.querySelector(".button_h_radius_off");
button_h_radius_off.addEventListener("click", function (event) {
    if (btn_theme.parentElement.className == "button_h_radius_off") {
        btn_theme.parentElement.className = "button_h_radius_on";
        document.querySelector(".container_main").style.backgroundColor = "#fff";
        document.querySelector(".search_description").style.color =
            "#000";
        document.querySelector(".search_input").style.color = "#fff";
        document.querySelector(".btn-search").style.color = "#fff";
        document.querySelector(".search_input").style.backgroundColor =
            "#000";
    }
    else {
        btn_theme.parentElement.className = "button_h_radius_off";
        document.querySelector(".container_main").style.backgroundColor = "#222629";
        document.querySelector(".search_description").style.color =
            "#86c232";
        document.querySelector(".btn-search").style.color = "#474b4f";
        document.querySelector(".search_input").style.backgroundColor =
            "#474b4f";
    }
});
//# sourceMappingURL=theme.js.map