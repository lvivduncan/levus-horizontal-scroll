// 2-08-2020
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll');

    // if exists one scroll
    if (scroll.length === 1) {

        // wrapper
        const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
        // elements
        let li = ul.querySelectorAll('li');

        // if less than 5, cloned 
        if (li.length <= 5) {
            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));
            // new nodelist
            li = scroll[0].querySelectorAll('.levus-horizontal-scroll li');
        }

        ul.style.left = `-25%`;

        scroll[0].innerHTML += '<span class="left"></span><span class="right"></span>';

        scroll[0].addEventListener('click', (e) => {
            const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
            if (e.target.className == 'left') {
                // move last element
                const last = ul.lastElementChild;
                ul.prepend(last);
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

        scroll[0].addEventListener('click', (e) => {
            const ul = scroll[0].querySelector('.levus-horizontal-scroll ul');
            if (e.target.className == 'right') {
                // move first element
                const first = ul.firstElementChild;
                ul.append(first);
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

            ul.style.left = `-25%`;


            item.innerHTML += '<span class="left"></span><span class="right"></span>';

            item.addEventListener('click', (e) => {
                const ul = item.querySelector('.levus-horizontal-scroll ul');
                if (e.target.className == 'left') {
                    // move last element
                    const last = ul.lastElementChild;
                    ul.prepend(last);
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

            item.addEventListener('click', (e) => {
                const ul = item.querySelector('.levus-horizontal-scroll ul');
                if (e.target.className == 'right') {
                    // move first element
                    const first = ul.firstElementChild;
                    ul.append(first);
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


        });

    }
}