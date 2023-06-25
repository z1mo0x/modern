const select = document.querySelectorAll('.select');

select.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('select-active');
    });

    const input = item.querySelector('.select__input');
    const items = item.querySelectorAll('.select__item');
    items.forEach((choise) => {
        choise.addEventListener('click', () => {
            items.forEach((element) => {
                element.style.display = 'block';
            })
            input.textContent = choise.textContent;

            if (input.textContent == choise.textContent) {
                choise.style.display = 'none';
            }
            else {
                choise.style.display = 'block';
            }
        })
    })


})