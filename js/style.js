const images = document.querySelectorAll('.style__image');
const items = document.querySelectorAll('.style__item');


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        images.forEach((image, index) => {
            let imageWidth = image.getBoundingClientRect().width;
            items[index].style.width = imageWidth + 'px';
        })
    }, 200)
})
