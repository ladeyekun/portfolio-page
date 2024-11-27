'use strict';

function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

const hamburgerButton = select('button.hamburger');
const nav = select('nav ul');

listen('click', hamburgerButton, () => {
    enableHamburgerNav();
});


function enableHamburgerNav () {
    nav.classList.toggle('active');
}