function minusAmount(){
    var element =  document.querySelector("#amount")
    var amount = parseInt(element.innerText);
    amount -= 1;
    if (amount < 0) {
        amount = 0;
    }
    element.innerText = amount;
    calculateTotal()
}

function plusAmount(){
    var element =  document.querySelector("#amount")
    var amount = parseInt(element.innerText);
    amount += 1;
    element.innerText = amount;
    calculateTotal()
}

function calculateTotal(){
    var amount_element =  document.querySelector("#amount")
    var amount = parseInt(amount_element.innerText);
    var price_element =  document.querySelector("#price")
    var price = parseInt(price_element.innerText);

    var total = price * amount;
    var total_element =  document.querySelector("#total")
    total_element.innerText = total;
}