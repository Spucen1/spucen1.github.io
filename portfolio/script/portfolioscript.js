const element = document.querySelectorAll('.show__item');
let previous = null;

element.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        if (previous && previous !== item && previous.classList.contains('active')) {
            previous.classList.remove('active')
        }
        previous = item;
    });
})