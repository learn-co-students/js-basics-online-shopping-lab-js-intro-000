var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    // write your code here
    var itemPrice = Math.floor(Math.random() * 100);
    cart.push({[item]: itemPrice});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    // write your code here
    switch (cart.length) {
        case 0:
            console.log("Your shopping cart is empty.");
            break;
        case 1:
            let item = cart[0];
            let keys = Object.keys(item);
            let itemName = keys[0];
            let itemPrice = item[itemName];
            console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);
            break;
        case 2:
            var log = "In your cart, you have ";
            for (let i = 0; i < 2; i++) {
                let item = cart[i];
                let keys = Object.keys(item);
                let itemName = keys[0];
                let itemPrice = item[itemName];
                if (i === 0) {
                    log += `${itemName} at $${itemPrice} `;
                } else {
                    log += `and ${itemName} at $${itemPrice}.`;
                }
            }
            console.log(log);
            break;
        default:
            var log = "In your cart, you have ";
            for (let i = 0; i < cart.length; i++) {
                let item = cart[i];
                let keys = Object.keys(item);
                let itemName = keys[0];
                let itemPrice = item[itemName];
                if (i === cart.length - 1) {
                    log += `and ${itemName} at $${itemPrice}.`;
                } else {
                    log += `${itemName} at $${itemPrice}, `;
                }
            }
            console.log(log);
            break;
    }
    return;
}

function total() {
    // write your code here
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let keys = Object.keys(item);
        let itemName = keys[0];
        let itemPrice = item[itemName];
        total += itemPrice;
    }
    return total;
}

function removeFromCart(item) {
    // write your code here
    for (let i = 0; i < cart.length; i++) {
        let obj = cart[i];
        if (obj.hasOwnProperty(item)) {
            cart.splice(i, 1);
            return cart;
        }
    }
    console.log("That item is not in your cart.");
    return cart;
}

function placeOrder(cardNumber) {
    // write your code here
    if (cardNumber === null || cardNumber === undefined) {
        console.log("Sorry, we don't have a credit card on file for you.");
        return;
    } else {
        var totalPrice = total();
        console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
        cart = [];
        return;
    }
}
