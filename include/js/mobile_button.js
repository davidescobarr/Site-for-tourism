var button = document.getElementById('button_mobile_menu');
var menu_open = document.getElementById('mobile_menu');

button.onclick = function () {
    if(menu_open.style.display == "block")
    {
        menu_open.style.animation = "anim_button_mobile_menu_close 0.5s forwards";
        setTimeout(function () { menu_open.style.display = "none"; }, 350);
    }
    else
    {
        menu_open.style.display = "block";
        menu_open.style.animation = "anim_button_mobile_menu_open 0.5s forwards";
    }
}