let iconMenu = document.querySelector('#menu_theicon');
let menu = document.querySelector('#boxx__menu');

function closeMenu() {
        menu.classList.toggle('on'); 
}

iconMenu.addEventListener('click', closeMenu);
        
        

let contentMenu = document.querySelectorAll('#boxx__menu ul li');
for (const li of contentMenu) {
        li.addEventListener("click", closeMenu);
}
