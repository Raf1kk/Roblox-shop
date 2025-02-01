let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Очищаем корзину
    cartItems.innerHTML = '';

    // Добавляем товары в корзину
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - ${item.price} ₽`;
        cartItems.appendChild(li);
    });

    // Обновляем итоговую цену
    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    // Перенаправление на Donation Alerts
    const donationAlertsLink = `https://www.donationalerts.com/r/ваш_никнейм?amount=${totalPrice}`;
    window.open(donationAlertsLink, '_blank');
}