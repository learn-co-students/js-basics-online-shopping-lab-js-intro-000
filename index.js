var cart = [{iphone: 50}, {xbox: 100}, {ps4: 5000}];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  var price = Math.floor(100*Math.random())
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var list= new String()
  var i=0
  if (cart.length ===0) {
    console.log("Your shopping cart is empty.")
      }
      else {for (i=0; i <cart.length; i++) {
        var meals =cart[i]
        var mealNames = Object.keys(meals)[0]
        list =list +` ${mealNames} at $${meals[mealNames]},`
      }
      console.log("In your cart, you have"+list.substring(0,list.length -1)+".")


      }
      }
  viewCart()

  function removeFromCart(item) {
    var i=0
    var j = cart.length
    var k =cart.length
  for (i=0; i <cart.length; i++) {
    var obj = cart[i]
    if (obj.hasOwnProperty([item])) {
      console.log(cart.splice(i,1))
      k = cart.length
      return cart
    }
  }
  if (k === j){
    console.log("That item is not in your cart.")
    return cart
  }
  }

  function placeOrder(cardNumber) {
    if (cardNumber === undefined) {
      console.log("We don't have a credit card on file for you to place your order.")
      return cart
    }
    else {
            console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
          return  cart=[]
    }
  }
