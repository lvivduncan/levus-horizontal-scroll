// scroll
const scroll = document.querySelector('.levus-horizontal-scroll');
// wrapper
const ul = scroll.querySelector('.levus-horizontal-scroll ul');
// elements
let li = ul.querySelectorAll('li');

// if less than 5, cloned 
if (li.length <= 5) {
    // cloned and append elements
    li.forEach(element => ul.append(element.cloneNode(true)));
    // new nodelist
    li = scroll.querySelectorAll('.levus-horizontal-scroll li');
}

ul.style.left = `-25%`;

scroll.innerHTML += '<span class="left"></span><span class="right"></span>';

scroll.addEventListener('click', (e) => {
    const ul = scroll.querySelector('.levus-horizontal-scroll ul');
    const last = ul.lastElementChild;
    if (e.target.className == 'left') {
        // move last element
        ul.prepend(last);
        // ul.insertAdjacentHTML('afterend', last);
        console.log(ul.length)
            // destroy transition
        ul.style.transition = '';
        // animation
        ul.style.transform = 'translateX(-25%)';
        setTimeout(() => {
            ul.style.transform = 'translateX(0)';
            ul.style.transition = '.5s';
        }, 50);
    }
});

scroll.addEventListener('click', (e) => {
    const ul = scroll.querySelector('.levus-horizontal-scroll ul');
    const first = ul.firstElementChild;
    if (e.target.className == 'right') {
        // move first element
        ul.append(first);
        // ul.insertAdjacentHTML('afterbegin', first);
        console.log(ul.length)
            // destroy transition
        ul.style.transition = '';
        // animation
        ul.style.transform = 'translateX(25%)';
        setTimeout(() => {
            ul.style.transform = 'translateX(0)';
            ul.style.transition = '.5s';
        }, 50);
    }
});