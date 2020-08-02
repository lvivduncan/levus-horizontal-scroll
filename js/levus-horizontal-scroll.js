// scroll
const scroll = document.querySelector('.levus-horizontal-scroll');
// wrapper
const ul = scroll.querySelector('.levus-horizontal-scroll ul');
// elements
let li = ul.querySelectorAll('li');
// left button
const left = scroll.querySelector('.left');
// righ button
const right = scroll.querySelector('.right');

// ul.style.width = ul / 4 * li.length + 'px';

// if less than 5, cloned 
if (li.length <= 5) {
    // cloned and append elements
    li.forEach(element => ul.append(element.cloneNode(true)));
    // new nodelist
    li = scroll.querySelectorAll('.levus-horizontal-scroll li');
}

ul.style.left = `-25%`;

left.addEventListener('click', () => {
    // move last element
    ul.prepend(ul.lastElementChild);
    // destroy transition
    ul.style.transition = '';
    // animation
    ul.style.transform = 'translateX(-25%)';
    setTimeout(() => {
        ul.style.transform = 'translateX(0)';
        ul.style.transition = '.5s';
    }, 50);
});

right.addEventListener('click', () => {
    // move first element
    ul.append(ul.firstElementChild);
    // destroy transition
    ul.style.transition = '';
    // animation
    ul.style.transform = 'translateX(25%)';
    setTimeout(() => {
        ul.style.transform = 'translateX(0)';
        ul.style.transition = '.5s';
    }, 50);
});