var right_button = document.getElementById("right_button_slider");
var left_button = document.getElementById("left_button_slider");
var slider = document.getElementById("slider");

var backgrounds_url = ['include/source/picture1.jpg', 'include/source/picture2.jpg', 'include/source/picture3.jpg'];
var number_slide = 0;
var work_transit = false;

function check_valid(number, array)
{
    if(number < array.length && number >= 0 && !work_transit)
    {
        return true;
    }
    return false;
}

function update_slider(number, object, array)
{
    if(check_valid(number, array))
    {
        work_transit = true;
        object.style.animation = "slider_hide 0.5s linear";
        setTimeout(function () { object.style.backgroundImage = "url(" + backgrounds_url[number] + ")"; }, 500);
        setTimeout(function () { object.style.animation = "slider_show 0.5s linear"; }, 480);
        setTimeout(function () { work_transit = false; }, 1000);
    }
}

right_button.onclick = function () {
    if(check_valid(number_slide + 1, backgrounds_url))
    {
        number_slide += 1;
        update_slider(number_slide, slider, backgrounds_url);
    }
}

left_button.onclick = function () {
    if(check_valid(number_slide - 1, backgrounds_url))
    {
        number_slide -= 1;
        update_slider(number_slide, slider, backgrounds_url);
    }
}