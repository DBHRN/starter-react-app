setTimeout(() => {
const prices = document.querySelectorAll('[data-price]');
const total = document.querySelector('[data-total]');

const totalPrices = () => {
    let sum = 0;
    prices.forEach((price) => {
        sum += parseInt(price.textContent);
    });
    total.textContent = sum;
}

totalPrices();
}, 3000);