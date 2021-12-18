// 8-10-2020 -- 18-12-2021
{
    // scroll
    const scroll = document.querySelectorAll('.levus-horizontal-scroll');

    let interval 

    for(let i = 0; i<scroll.length; i++){

        const item = scroll[i]

        const ul = item.querySelector('ul');

        // elements
        let li = ul.querySelectorAll('li');

        // if less than 4, cloned 
        if (li.length <= 4) {

            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)));

            // new nodelist
            li = item.querySelectorAll('li');
        }

        item.innerHTML += '<div class="levus-nav"><span class="left"></span><span class="right"></span></div>';

        item.addEventListener('click', e => {
            const ul = item.querySelector('ul');

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

        item.addEventListener('click', e => {
            const ul = item.querySelector('ul');

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

        interval = setInterval(() => {

            const ul = item.querySelector('ul');

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
         
        }, 3500);

        // TODO: пауза працює якщо скрол є 1, працює на останньому. пофіксити
        item.addEventListener('mouseover', () => {
            
            clearInterval(interval)
        })

        item.addEventListener('mouseout', () => {

            interval = setInterval(() => {

                const ul = item.querySelector('ul');

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
            
            }, 3500);            
        })
    }
}