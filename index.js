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

    for (i=0, l = myCart.length-1;i<l;i++)
    {
      var item = Object.keys(myCart[i])[0]
      console.log(item)

      for (item in myCart[i])
        {
          //console.log(item)
          list = list + item + " at " + myCart[i][item]+ ((i<myCart.length-1)?(","):("."))
          //console.log(item)
        }
      }
    }
    console.log(list)
    return

}
