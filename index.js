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
    getCart().push({ [item] : getRandomInt(1,100)})
    console.log(`${item} has been added to your cart.`)
    return getCart()
}

function getRandomInt(min, max) {
  // The maximum is exclusive and the minimum is inclusive
  // To make the maximum inclusive, we added 1 to the value.
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function viewCart() {
    var cart=getCart()
    var response='In your cart, you have'

    if (cart.length === 0 ) {
        console.log('Your shopping cart is empty.')
    }

    for (var i=0; i < cart.length; i++) {
        if (i === 0) {
            // This is the first iteration
            response=`${response} ${formatCartItem(cart[i])}`
        } else if ( i === (cart.length - 1) && i === 1 ) {
            // This is the last iteration of a cart with two elements
            response=`${response} and ${formatCartItem(cart[i])}`
        } else if ( i === (cart.length - 1) ) {
            // This is the last iteration of a cart with more than two elements
            response=`${response}, and ${formatCartItem(cart[i])}`
        } else {
            // This is an intermediate iteration
            response=`${response}, ${formatCartItem(cart[i])}`
        }
    }
    response=`${response}.`
    console.log(response)
}

function formatCartItem(item) {
    for (var property in item) {
        if (item.hasOwnProperty(property)) {
            return `${property} at \$${item[property]}`
        }
    }
}

function total() {

    var cart=getCart()
    var total = 0

    for (var i=0; i < cart.length; i++) {
        total += getCartItemPrice(cart[i])
    }
    return total
}

function getCartItemPrice(item) {
    for (var property in item) {
        if (item.hasOwnProperty(property)) {
            return item[property]
        }
    }
}

function getCartItemName(item) {
    for (var property in item) {
        if (item.hasOwnProperty(property)) {
            return property
        }
    }
}

function removeFromCart(item) {

    var cart=getCart()

    // Loop through the cart to find out if item is there
    for (var i=0; i < cart.length; i++) {
        if (item === getCartItemName(cart[i])) {
            // If item is found, remove it from the cart
            cart.splice(i,1)
            return cart
        }
    }

    // If we end up here, no item in the cart
    // matched the argument
    console.log('That item is not in your cart.')
    return cart
}



function placeOrder(cardNumber) {

    var cart=getCart()

    if ( !cardNumber ) {
        console.log('Sorry, we don\'t have a credit card on file for you.')
        return
    }
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)

    // cart.splice(0,cart.length)
    cart.splice(0,cart.length)

}
