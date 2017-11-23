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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
    return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100);
    cart.push({[item] : price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
    var temp = 'In your cart, you have ';
    if (cart.length == 0) {
            console.log("Your shopping cart is empty.");
    } else {
        for (var i = 0; i < cart.length; i++) {
            for (var variable in cart[i]) {
                temp += `${variable} at $${cart[i][variable]}, `;
            }
        }
    console.log(temp.substring(0, temp.length-2) + ".");
    }
}

function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].hasOwnProperty(item)) {
            cart.splice(i,1);
            return cart;
        }
    }
    console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
    function total() {
        var totalCash = 0;
        for (var i = 0; i < cart.length; i++) {
            for (var key in cart[i]) {
                if (cart[i].hasOwnProperty(key)) {
                    totalCash += cart[i][key];
                }
            }
        }
        return totalCash;
    }
    if (cardNumber == undefined) {
        console.log("We don't have a credit card on file for you to place your order.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
        return cart;
    }
}
