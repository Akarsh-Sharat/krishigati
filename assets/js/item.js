function addToCart() {
    let cartBtn = document.querySelector('.add-to-cart');
    let productId = document.getElementById("id");
    let productTitle = document.querySelector('.product-title');
    let quantity = document.querySelector('.quantity');
    let price = document.querySelector('.price');
    let item = {};
    
    if (sessionStorage.getItem("cartItemData") == null){
        sessionStorage.setItem("cartItemData", JSON.stringify([]))
        var cartItemData = JSON.parse(sessionStorage.getItem("cartItemData"));
    }
    else{
        var cartItemData = JSON.parse(sessionStorage.getItem("cartItemData"));
    }

    cartBtn.addEventListener('click', () => {
        item = {
            "id": parseInt(productId.innerHTML),
            "name": productTitle.innerHTML,
            "quantity": parseInt(quantity.value),
            "price": parseInt(price.innerHTML),
            "totalAmount": quantity.value * price.innerHTML
        };
        if (item.quantity > 0){
            cartItemData.push(item);
            sessionStorage.setItem("cartItemData", JSON.stringify(cartItemData));
        }
    });
}

(function() {
    addToCart();
})()