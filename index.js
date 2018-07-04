var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100);

    cart.push({itemName:`${item}`, itemPrice: price});

    return `${item} has been added to your cart.`;
}

function viewCart() {
    var total = cart.length;
    if(total < 1)
        return "Your shopping cart is empty.";
    else if(total === 1)
        return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    else
    {
        var message = "In your cart, you have ";
        for(var i = 0; i < cart.length; i++){
            if(i === cart.length - 1)
                message += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
            else
                message += `${cart[i].itemName} at $${cart[i].itemPrice}, `;

        }

        return message;
    }
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
