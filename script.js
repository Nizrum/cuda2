'use strict';

let portfolioItems = document.querySelectorAll('.portfolio__item');
let portfolioButton = document.querySelector('.portfolio__button');
let portfolioTypes = document.querySelectorAll('.portfolio__type');

portfolioButton.addEventListener('click', function () {
    let count = 0;
    for (let i = 0; i < portfolioItems.length; i++) {
        if (portfolioItems[i].classList.contains('block') === false) {
            portfolioItems[i].classList.add('block');
            count++;
        }
    }
    if (count === 0) {
        portfolioItems[4].classList.remove('block');
        portfolioItems[5].classList.remove('block');
    }
    if (portfolioButton.textContent === 'SHOW MORE PROJECTS') {
        portfolioButton.textContent = 'SHOW LESS PROJECTS';
    } else {
        portfolioButton.textContent = 'SHOW MORE PROJECTS';
    }
});

for (let i = 0; i < portfolioTypes.length; i++) {
    portfolioTypes[i].addEventListener('click', function () {
        let id = portfolioTypes[i].id;
        if (id === 'all') {
            for (let j = 0; j < portfolioItems.length; j++) {
                portfolioItems[j].classList.remove('block');
            }
            for (let c = 0; c < 4; c++) {
                portfolioItems[c].classList.add('block');
            }
            portfolioButton.textContent = 'SHOW MORE PROJECTS';
        } else {
            for (let k = 0; k < portfolioItems.length; k++) {
                portfolioItems[k].classList.remove('block');
                if (portfolioItems[k].classList.contains(id)) {
                    portfolioItems[k].classList.add('block');
                }
            }
            portfolioButton.textContent = 'SHOW MORE PROJECTS';
        }
    });
}