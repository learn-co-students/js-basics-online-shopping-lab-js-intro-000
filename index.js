var cart = [];

function getCart()
{
 return cart;
}

function setCart(c)
{
  cart = c;
  return cart;
}

function addToCart(item)
{
  var price = Math.floor((Math.random()*100)+1)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart()
{
  var str = "In your cart, you have "

  if(cart.length===0)
  {
    str = "Your shopping cart is empty"
  }

  for(var i=0; i<cart.length; i++)
  {
    if(i !== 0)
    {
      if (cart.length>2)
      {
        str += ","
      }
      str += " "
      if (i===cart.length-1)
      {
        str += "and "
      }
    }

    var thingName = Object.keys(cart[i])[0]
    var price = cart[i][thingName]
    str += `${thingName} at $${price}`
  }
  str += "."
  console.log(str)
}

function total()
{
  var sum = 0
  for(var i=0; i<cart.length; i++)
  {
    var thingName = Object.keys(cart[i])[0]
    var price = cart[i][thingName]
    sum += price
  }
  return sum
}

function removeFromCart(item)
{
  var removed = false
  for(var i=0; i<cart.length; i++)
  {
    var thingName = Object.keys(cart[i])[0]
    if(thingName === item)
    {
      cart.splice(i,1)
      i=0
      removed = true
    }
  }
  if (removed === false)
  {
    console.log("That item is not in your cart.")
  }
  return cart;
}

function placeOrder(cardNumber)
{
  if(undefined != cardNumber)
  {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    return;
  }
  console.log('Sorry, we don\'t have a credit card on file for you.')
}
