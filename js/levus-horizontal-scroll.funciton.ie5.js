// 2-12-2020
"use strict";
function levusHorizontalScroll(selector) {
  var scroll = document.querySelectorAll(selector);
  scroll.forEach(function (item) {
    var ul = item.querySelector('ul');
    var li = ul.querySelectorAll('li');

    if (li.length <= 4) {
      li.forEach(function (element) {
        return ul.append(element.cloneNode(true));
      });
      li = item.querySelectorAll('li');
    }

    item.innerHTML += '<div class="levus-nav"><span class="left"></span><span class="right"></span></div>';
    item.addEventListener('click', function (e) {
      var ul = item.querySelector('ul');

      if (e.target.className == 'left') {
        var last = ul.lastElementChild;
        ul.prepend(last);

        ul.style.transition = 'none';
        ul.classList.add('to-right');
        setTimeout(function () {
          ul.classList.remove('to-right');
          ul.style.transition = '.5s';
        }, 50);
      }
    });
    item.addEventListener('click', function (e) {
      var ul = item.querySelector('ul');

      if (e.target.className == 'right') {
        var first = ul.firstElementChild;
        ul.append(first);

        ul.style.transition = 'none';
        ul.classList.add('to-left');
        setTimeout(function () {
          ul.classList.remove('to-left');
          ul.style.transition = '.5s';
        }, 50);
      }
    });
  });
}

levusHorizontalScroll('.levus-horizontal-scroll');