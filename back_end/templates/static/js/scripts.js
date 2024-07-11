function showWelcomeMessage() {
    alert("¡Bienvenidos a Tienda de ropa deportiva!");
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name && email && message) {
            alert("Gracias por tu mensaje, " + name + ". Nos pondremos en contacto contigo pronto.");
            document.getElementById('contactForm').reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});

// static/js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const productPrices = {
        "Zapatillas de Running": 120000,
        "Ropa Deportiva": 80000,
        "Equipos de Fitness": 200000,
        "Accesorios Deportivos": 50000,
        "Esterillas de Yoga": 25000,
        "Sujetadores Deportivos": 35000
    };

    const cartItems = [];

    document.getElementById('cartForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let product = document.getElementById('product').value;

        if (product) {
            cartItems.push(product);
            updateCart();
            document.getElementById('cartForm').reset();
        } else {
            alert("Por favor, elige un producto.");
        }
    });

    document.getElementById('finalizePurchase').addEventListener('click', function () {
        if (cartItems.length > 0) {
            alert("Compra finalizada. Gracias por tu compra!");
            cartItems.length = 0;
            updateCart();
        } else {
            alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
        }
    });

    function updateCart() {
        const cartContainer = document.getElementById('cartItems');
        cartContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            let price = productPrices[item];
            total += price;

            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<span>${item}</span><span class="price">$${price}</span>`;
            cartContainer.appendChild(cartItem);
        });

        document.getElementById('totalPrice').innerText = `Total: $${total}`;
    }
});
