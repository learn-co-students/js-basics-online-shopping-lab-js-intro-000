var cart;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100+1)})

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else {
    var string = "In your cart, you have"

    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]).toString()
      var lastItem = Object.keys(cart[cart.length-1]).toString()
      var price = Number(Object.values(cart[i]).toString())

      if (item !== lastItem) {
        string += ` ${item} at $${price},`

        // if cart only contains 2 items -- no ','
        if (cart.length == 2) {
          string = string.slice(0, string.length-1)
        }

      } else {
        if (cart.length == 1) {
          string += ` ${item} at $${price}.`
        } else {
          // add 'and' before last iteration
          string += ` and ${item} at $${price}.`
        }
      }
    }

    console.log(string)
  }
}

function total() {
  var total = 0;
  var price = 0;

  for (let i = 0; i < cart.length; i++) {
    price = Number(Object.values(cart[i]).toString())
    total += price
  }
  return total
}

function removeFromCart(item) {

  for (let i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i]).toString()
    var price = Number(Object.values(cart[i]).toString())
    if (name === item) {
      cart.splice(i, 1)
      return cart
    }
  }

  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = new Array()
  }
}
