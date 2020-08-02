class LevusHorizontalScroll {
    constructor(scroll) {
        // scroll
        this.scroll = document.querySelector(scroll);
        // wrapper
        this.ul = this.scroll.querySelector('.levus-horizontal-scroll ul');
        // elements
        this.li = this.ul.querySelectorAll('li');
        // left button
        // this.left = this.scroll.querySelector('.left');
        // righ button
        // this.right = this.scroll.querySelector('.right');
    }

    clone() {
        // cloned and append elements
        this.li.forEach(element => this.ul.append(element.cloneNode(true)));
        // new nodelist
        this.li = this.scroll.querySelectorAll('.levus-horizontal-scroll li');
    }

    translate() {
        this.ul.style.left = `-25%`;
    }

    buttons() {
        // create button
        const left = document.createElement('span');
        left.setAttribute('class', 'left');
        this.scroll.prepend(left);

        // create button
        const right = document.createElement('span');
        right.setAttribute('class', 'right');
        this.scroll.prepend(right);

        document.addEventListener('click', (e) => {
            if (e.target.className == 'left') {
                // move last element
                this.ul.prepend(this.ul.lastElementChild);
                // destroy transition
                this.ul.style.transition = '';
                // animation
                this.ul.style.transform = 'translateX(-25%)';
                setTimeout(() => {
                    this.ul.style.transform = 'translateX(0)';
                    this.ul.style.transition = '.5s';
                }, 50);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.className == 'right') {
                // move first element
                this.ul.append(this.ul.firstElementChild);
                // destroy transition
                this.ul.style.transition = '';
                // animation
                this.ul.style.transform = 'translateX(25%)';
                setTimeout(() => {
                    this.ul.style.transform = 'translateX(0)';
                    this.ul.style.transition = '.5s';
                }, 50);
            }
        });
    }

    init() {
        // if less than 5, cloned 
        this.li.length <= 5 && this.clone();
        this.translate();
        this.buttons();
    }
}

document.querySelector('.levus-horizontal-scroll') && new LevusHorizontalScroll('.levus-horizontal-scroll').init();