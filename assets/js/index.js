precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function minusAmount(){
    const element =  document.querySelector(".cantidad")
    let amount = parseInt(element.innerText);
    amount -= 1;
    if (amount < 0) {
        amount = 0;
    }
    element.innerText = amount;
    calculateTotal()
}

function plusAmount(){
    const element =  document.querySelector(".cantidad")
    let amount = parseInt(element.innerText);
    amount += 1;
    element.innerText = amount;
    calculateTotal()
}

function calculateTotal(){
    const amount_element =  document.querySelector(".cantidad")
    let amount = parseInt(amount_element.innerText);
    let price_element =  document.querySelector(".precio-inicial")
    let price = parseInt(price_element.innerText);

    var total = price * amount;
    const total_element =  document.querySelector(".valor-total")
    total_element.innerText = total;
}