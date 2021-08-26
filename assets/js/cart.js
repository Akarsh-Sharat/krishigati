if (sessionStorage.getItem("cartItemData") == null){
    sessionStorage.setItem("cartItemData", JSON.stringify([]))
    var cartItemData = JSON.parse(sessionStorage.getItem("cartItemData"));
}
else{
    var cartItemData = JSON.parse(sessionStorage.getItem("cartItemData"));
}

var listUpdate = (cartItemData) => {
    let checkList = document.querySelector('.checklist');
    let totalAmt = document.querySelector(".total-amount");
    let html = '';
    let total = 0;

    for (let i = 0; i < cartItemData.length; i++) {
        let htmlSegment = `
        <li class="cart-item">\
        <div class="index">${cartItemData[i].id}</div>\
        <div class="name">${cartItemData[i].name}</div>\
        <div class="price">${cartItemData[i].price}</div>\
        <div class="quantity">${cartItemData[i].quantity}</div>\
        <div class="amount">₹${cartItemData[i].totalAmount}</div>\
        <div class="cross item${cartItemData[i].id}" onclick="removeItem(${cartItemData[i].id})"><span class="material-icons">
        delete
        </span></div>\
        </li>`;
        html += htmlSegment;
        total += cartItemData[i].totalAmount;
    }
    checkList.innerHTML = html;
    totalAmt.innerHTML = `Total: ₹ <span id="total-amount">${total}</span>`;
}

async function addList(){
    if (cartItemData != null){
        listUpdate(cartItemData)
    }
}

function removeItem(id) {
    for (let i = 0; i < cartItemData.length; i++) {
        if (cartItemData[i].id == id){
            cartItemData = (cartItemData.slice(0,i)).concat(cartItemData.slice(i+1));
            sessionStorage.setItem("cartItemData", JSON.stringify(cartItemData));
            listUpdate(cartItemData);
            break;
        }
    }
}

function paymentModal() {
    let paymentPay = document.querySelector('.pay-now');
    let paymentModalDiv = document.getElementById("payment-modal");
    let modalClose = document.querySelector(".payment-close");
    let totalAmount = document.getElementById("total-amount").innerHTML;
    let amountPayable = document.getElementById("total-amount-payable");
    let overlay = document.getElementById("oveerlay");

    // console.log(totalAmount);
    if (parseInt(totalAmount) > 0) {
        paymentPay.addEventListener('click', () => {
            paymentModalDiv.style.display = "block";
        });
    }

    modalClose.addEventListener('click', () => {
        paymentModalDiv.style.display = "none";
        overlay.style.display = "none";
    });
    
    amountPayable.innerHTML = parseInt(totalAmount);
}

if (sessionStorage.getItem("userDetails") == null){
    sessionStorage.setItem("userDetails", JSON.stringify([]))
    var userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
}
else{
    var userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
}

function makePayment() {
    let paymentName = document.getElementById("payment-name");
    let paymentEmail = document.getElementById("payment-email");
    let paymentMob = document.getElementById("payment-mobile");
    let amountPayable = document.getElementById("total-amount-payable");
    let payBtn = document.querySelector(".payment-pay");

    payBtn.addEventListener('click', () => {
        if (paymentName.value != "" && paymentEmail.value != "" && paymentMob.value != "" ) {
            let purchaseDetails = {
                "name": paymentName.value,
                "email": paymentEmail.value,
                "mobile": paymentMob.value,
                "amount": amountPayable.innerHTML
            }
            sessionStorage.setItem("userDetails", JSON.stringify(purchaseDetails));
            console.log(JSON.parse(sessionStorage.getItem("userDetails")));

        }
    });
}

(function() {
    addList();
    paymentModal();
    makePayment();
})()
