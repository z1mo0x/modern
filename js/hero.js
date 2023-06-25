const molbertText = document.querySelector('.hero__molbert');
const welcomeText = document.querySelector('.hero__welcome');
const welcomeTextWidth = welcomeText.getBoundingClientRect().width;
const molbertTextWidth = molbertText.getBoundingClientRect().height;
const image = document.querySelectorAll('.hero__image-bottom')[1];
molbertText.style.left = welcomeTextWidth + 'px';
image.style.marginTop = molbertTextWidth + 'px';