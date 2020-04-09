const dropdown = document.querySelectorAll('.nav__dropdown');
const navFontBtns = document.querySelectorAll('.nav__settings-item_font > .nav__settings-btn');

dropdown.forEach(elem => {
    const trigger = elem.querySelector('.nav__dropdown-btn');

    trigger.addEventListener('click', e => {
        const menu = elem.querySelector('.nav__dropdown-menu');

        trigger.classList.toggle('nav__dropdown-btn_active');
        menu.classList.toggle('nav__dropdown-menu_active');
    });
});

navFontBtns.forEach(btn => {
    btn.style.fontSize = btn.innerText + 'px';
})