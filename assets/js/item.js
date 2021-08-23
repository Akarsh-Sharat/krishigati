function addToCart() {
    let cart = document.querySelector('.add-to-cart');
    let productTitle = document.querySelector('.product-title');
    let quantity = document.querySelector('.quantity');
    let price = document.querySelector('.price');
    let item = {};

    cart.addEventListener('click', () => {
        fetch("../assets/json/cart.json")
            .then((res) => res.json())
            .then((data) => {
                item = {
                    "id": data.length+1,
                    "name": `${productTitle.innerHTML}`,
                    "quantity": `${quantity.value}`,
                    "price": `${price.innerHTML}`,
                    "totalAmount": `${quantity.value * price.innerHTML}`,
                }
                data.push(item);
                data = JSON.stringify(data);
                
            })
            .catch((err) => console.log(err));
    });
}

(function() {
    addToCart();
})()