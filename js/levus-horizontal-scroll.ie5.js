"use strict";
{
  var scroll = document.querySelectorAll('.levus-horizontal-scroll');
  scroll.forEach(function (item) {
    var ul = item.querySelector('.levus-horizontal-scroll ul');
    var li = ul.querySelectorAll('li');
    if (li.length <= 4) {
      li.forEach(function (element) {
        return ul.append(element.cloneNode(true));
      });
      li = item.querySelectorAll('.levus-horizontal-scroll li');
    }
    item.innerHTML += '<span class="left"></span><span class="right"></span>';
    item.addEventListener('click', function (e) {
      var ul = item.querySelector('.levus-horizontal-scroll ul');
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
      var ul = item.querySelector('.levus-horizontal-scroll ul');
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