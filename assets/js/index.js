function minusAmount(){
    var element = document.getElementById("amount");
    var amount = parseInt(element.innerText);
    amount -= 1;
    if (amount < 0) {
        amount = 0;
    }
    element.innerText = amount;
    calculateTotal()
}

function plusAmount(){
    var element = document.getElementById("amount");
    var amount = parseInt(element.innerText);
    amount += 1;
    element.innerText = amount;
    calculateTotal()
}

function calculateTotal(){
    var amount = parseInt(document.getElementById("amount").innerText);
    var price = parseInt(document.getElementById("price").innerText);

    var element = document.getElementById("total");
    var total = price * amount;
    element.innerText = total;
}