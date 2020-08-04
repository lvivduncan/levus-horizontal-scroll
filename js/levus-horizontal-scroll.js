// 4-08-2020
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll');

    // if exists one scroll
    if (scroll.length === 1) {

        // wrapper
        const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
        // nodelist
        let li = ul.querySelectorAll('li');

        // if less than 5, cloned 
        if (li.length <= 5) {
            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));
            // new nodelist
            li = scroll[0].querySelectorAll('.levus-horizontal-scroll li');
        }

        scroll[0].innerHTML += '<span class="left"></span><span class="right"></span>';

        scroll[0].addEventListener('click', (e) => {
            const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
            if (e.target.className == 'left') {
                // move last element
                const last = ul.lastElementChild;
                ul.prepend(last);
                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-right');
                setTimeout(() => {
                    ul.classList.remove('to-right');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });

        scroll[0].addEventListener('click', (e) => {
            const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
            if (e.target.className == 'right') {
                // move first element
                const first = ul.firstElementChild;
                ul.append(first);
                // destroy transition
                ul.style.transition = 'none';
                ul.classList.add('to-left');
                setTimeout(() => {
                    ul.classList.remove('to-left');
                    ul.style.transition = '.5s';
                }, 50);
            }
        });
    }

    // if exists more than one scroll
    if (scroll.length > 1) {

        scroll.forEach(item => {
            const ul = item.querySelector('.levus-horizontal-scroll ul');
            // elements
            let li = ul.querySelectorAll('li');

            // if less than 5, cloned 
            if (li.length <= 5) {
                // cloned and append elements
                li.forEach(element => ul.append(element.cloneNode(true)));
                // new nodelist
                li = item.querySelectorAll('.levus-horizontal-scroll li');
            }

            item.innerHTML += '<span class="left"></span><span class="right"></span>';

            item.addEventListener('click', (e) => {
                const ul = item.querySelector('.levus-horizontal-scroll ul');
                if (e.target.className == 'left') {
                    // move last element
                    const last = ul.lastElementChild;
                    ul.prepend(last);
                    // destroy transition
                    ul.style.transition = 'none';
                    ul.classList.add('to-right');
                    setTimeout(() => {
                        ul.classList.remove('to-right');
                        ul.style.transition = '.5s';
                    }, 50);
                }
            });

            item.addEventListener('click', (e) => {
                const ul = item.querySelector('.levus-horizontal-scroll ul');
                if (e.target.className == 'right') {
                    // move first element
                    const first = ul.firstElementChild;
                    ul.append(first);
                    // destroy transition
                    ul.style.transition = 'none';
                    ul.classList.add('to-left');
                    setTimeout(() => {
                        ul.classList.remove('to-left');
                        ul.style.transition = '.5s';
                    }, 50);
                }
            });
        });
    }
}