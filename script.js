const cursorPointed = document.querySelector('.pointed');
const cursorRounded = document.querySelector('.rounded');
const headerLogo = document.querySelector('.header__top__logo');
const headerTopContactsLink = document.querySelector('.header__top__contacts__link');
const headerTopContactsLinkDot = document.querySelector('.header__top__contacts__dot');
const headerMainText = document.querySelector('.header__main__text__animation');

const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
window.addEventListener('mousemove', moveCursor);

function addClassPointerLogo(e) {
    if (e.type === 'mouseover') {
        cursorPointed.classList.add('pointer__logo');
        cursorRounded.classList.add('rounded__logo');
    } else if (e.type === 'mouseout') {
        cursorPointed.classList.remove('pointer__logo');
        cursorRounded.classList.remove('rounded__logo');
    }
}

headerLogo.onmouseover = headerLogo.onmouseout = addClassPointerLogo;

function addClassPointerContacts(e) {
    if (e.type === 'mouseover') {
        cursorPointed.classList.add('pointer__contacts');
        cursorRounded.classList.add('rounded__contacts');
    } else if (e.type === 'mouseout') {
        cursorPointed.classList.remove('pointer__contacts');
        cursorRounded.classList.remove('rounded__contacts');
    }
}

headerTopContactsLink.onmouseover = headerTopContactsLink.onmouseout = addClassPointerContacts;

function addClassPointerDot(e) {
    if (e.type === 'mouseover') {
        cursorPointed.classList.add('pointer__dot');
        cursorRounded.classList.add('rounded__contacts');
    } else if (e.type === 'mouseout') {
        cursorPointed.classList.remove('pointer__dot');
        cursorRounded.classList.remove('rounded__contacts');
    }
}

headerTopContactsLinkDot.onmouseover = headerTopContactsLinkDot.onmouseout = addClassPointerDot;

function headerMainTextAnimation(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    let xdeg = (mouseX - halfWidth) / halfWidth;
    let ydeg = (mouseY - halfHeight) / halfHeight;
    headerMainText.style.transform = `rotateX(${ydeg * 10}deg) rotateY(${xdeg * 10}deg)`;
}

window.addEventListener("mousemove", headerMainTextAnimation);

