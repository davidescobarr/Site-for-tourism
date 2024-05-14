const footer = document.getElementById("footer");
const buttons = document.querySelectorAll('#button_contact');

for(let i = 0 ; i < buttons.length ; i++) {
  const btn = buttons[i]; 
  btn.addEventListener('click' , button_contact);
}

function button_contact() {
    footer.scrollIntoView({behavior: "smooth"});
}