let basket1Count = document.querySelector('.Basket-1 span');
let basket2Count = document.querySelector('.Basket-2 span');
let totalApple = 10;
let SecondBasketApple = 0;
let FirstBasketApple = totalApple - SecondBasketApple;
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');

basket1Count.innerText = totalApple;
FirstBasketApple.innerText = FirstBasketApple;
SecondBasketApple.innerText = SecondBasketApple;


rightArrow.addEventListener('click', () => {
    if (FirstBasketApple > 0) {
        FirstBasketApple--; 
        SecondBasketApple++; 
        basket1Count.innerText = FirstBasketApple; 
        basket2Count.innerText = SecondBasketApple; 
    }
});

leftArrow.addEventListener('click', () => {
    if (SecondBasketApple > 0) {
        SecondBasketApple--; 
        FirstBasketApple++; 
        basket1Count.innerText = FirstBasketApple; 
        basket2Count.innerText = SecondBasketApple; 
    }
});

