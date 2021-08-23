var data = fetchData('../assets/json/cart.json');

async function fetchData(url) {
    try{
        let res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function addList(){
    let checkList = document.querySelector('.checklist');
    let totalAmt = document.querySelector(".total-amount");
    let html = '';
    let total = 0;

    data.then((data) => {
        if (data == null){pass}
        else{
            data.forEach(item => {
                let htmlSegment = `
                    <li class="cart-item">\
                        <div class="index">${item.id}</div>\
                        <div class="name">${item.name}</div>\
                        <div class="price">${item.price}</div>\
                        <div class="quantity">${item.quantity}</div>\
                        <div class="amount">$${item.totalAmount}</div>\
                        <div class="cross item${item.id}" onclick="removeItem(${item.id})"><span class="material-icons">
                        delete
                        </span></div>\
                    </li>`;
                html += htmlSegment;
                total += item.totalAmount;
            });
            checkList.innerHTML = html;
            totalAmt.innerHTML = `Total: $ ${total}`;
        }
    });
}

function removeItem(id) {
    console.log(id);
    console.log('click');
    // let a = [
    //     {
    //         "name": "yash",
    //         "last": "chaube",
    //         "clg": "mit"
    //     },
    //     {
    //         "name": "akki",
    //         "last": "ghosdtt",
    //         "clg": "mit"
    //     }
    // ];

    // console.log(a)
    // a.splice(0,1)
    // console.log(a)


    data.then((data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id){
                delete data[id-1]
                console.log(data);
            }
        }
    })
}

(function() {
    addList();
})()

/* <li class="cart-item">
    <div class="index">1</div>
    <div class="name">Product name</div>
    <div class="price">500</div>
    <div class="quantity">10</div>
    <div class="amount">5000</div>
    <div class="cross">x</div>
</li> */