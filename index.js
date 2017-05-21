var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 99);
    cart.push(new Object({[item]: price}));
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    if (cart.length > 0) {
        var itemsAndCost = [];
        for (let i = 0; i < cart.length; i++) {
            for (var item in cart[i]) {
                itemsAndCost.push(`${item} at $${cart[i][item]}`);
            }
        }

        console.log(`In your cart, you have ${itemsAndCost.join(", ")}.`);
    }
    else {
        console.log("Your shopping cart is empty.");
    }


}

function total() {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
            total += cart[i][item];
        }
    }
    return total;
}

function removeFromCart(itemToRemove) {
    for (let i = 0; i < cart.length; i++) {
        for (var item in cart[i]) {
            // Found a match.
            if (item === itemToRemove) {
                cart.splice(i, 1);
                return cart;
            }
        }
    }
    // Found nothing.
    console.log("That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber) {
    if (cardNumber !== undefined) {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
        cart.splice(0);
        // Can also do `cart = [];`
    }
    else {
        console.log("We don't have a credit card on file for you to place your order.")
    }
}
