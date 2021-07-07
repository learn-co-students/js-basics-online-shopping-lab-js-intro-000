var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

    function getPrice() {
        return Math.floor(Math.random() * 100)
    }

    cart.push({itemName: item, itemPrice: getPrice()})

    return `${item} has been added to your cart.`

}

function viewCart() {


    if (cart.length === 0) {
        return "Your shopping cart is empty."
    }

    var list = ""

    for (var i = 0; i < cart.length; i++) {

        if (i === cart.length - 1 && i != 0) {
            list += ' and'
        }

        var name = cart[i].itemName;
        var price = cart[i].itemPrice;
        list += ` ${name} at $${price}`

        if (i === cart.length - 1) {
            list += '.'
        } else {
            list += ','
        }

    }


    return `In your cart, you have${list}`
}

function total() {
    var sum = 0
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].itemPrice
    }
    return sum
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item) {
            cart.splice(i,1)
        }
    }
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {

    if (cardNumber === undefined) {
        return "Sorry, we don't have a credit card on file for you."
    }

    var totPrice = total()
    cart = []

    return `Your total cost is $${totPrice}, which will be charged to the card ${cardNumber}.`

}
