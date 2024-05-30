const precio = 400000
let cantidad = 0

document.onload = init();

function init() {
    document.querySelector("#amount").innerText = cantidad
    document.querySelector("#price").innerText = precio
}

function minusAmount(){
    const element =  document.querySelector("#amount")
    let amount = parseInt(element.innerText);
    amount -= 1;
    if (amount < 0) {
        amount = 0;
    }
    element.innerText = amount;
    calculateTotal()
}

function plusAmount(){
    const element =  document.querySelector("#amount")
    let amount = parseInt(element.innerText);
    amount += 1;
    element.innerText = amount;
    calculateTotal()
}

function calculateTotal(){
    const amount_element =  document.querySelector("#amount")
    let amount = parseInt(amount_element.innerText);
    let price_element =  document.querySelector("#price")
    let price = parseInt(price_element.innerText);

    var total = price * amount;
    const total_element =  document.querySelector("#total")
    total_element.innerText = total;
}