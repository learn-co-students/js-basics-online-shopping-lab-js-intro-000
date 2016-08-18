var cart=[];

function setCart(newCart)
{
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

function getCart()
{
  return cart
}

function addToCart(item)
{
  var entry={}

  var price=Math.random()*100
  price= Math.floor(price)

  var myCart = getCart()
  entry[item]=price
  myCart.push(entry)
  console.log(item +" has been added to your cart.")
  setCart( myCart)
  return myCart
}
  function viewCart()
{
  var myCart = getCart()
  if (myCart.length === 0)
  {
    console.log("Your shopping cart is empty.")
    return
  }
  else
{
    var i
    var l
    var list = "In your cart, you have "

    for (i=0, l = myCart.length;i<l;i++)
    {
      var item = Object.keys(myCart[i])[0]
      console.log(item)

      for (item in myCart[i])
        {
          //console.log(item)
          list = list + item + " at $" + myCart[i][item]+ ((i<myCart.length-1)?(", "):("."))
          //console.log(item)
        }
      }
    }
    console.log(list)
    return

}
  function removeFromCart(order)
  {
    var myCart = getCart()
    for (var i=0, l = myCart.length;i<l;i++)
    {
      var item = Object.keys(myCart[i])[0]
      console.log(item)

      for (item in myCart[i])
      {
        if(order==item)
        var newCart
        newCart=[...myCart.slice(0,i-1),...myCart.slice(i+1)]//delete myCart[i]//[item]
          setCart(newCart)
          return
        }
      }
  console.log("That item is not in your cart.")
  return
} function placeOrder(cardNumber)
{
  if(cardNumber == null)
  {
      console.log("We don't have a credit card on file for you to place your order." )
      return
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
