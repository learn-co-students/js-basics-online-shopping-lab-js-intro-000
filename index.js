var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName)
  {
   var itemObj =
    {
     itemName: itemName,
     itemPrice: Math.floor(Math.random()*100) + 1
    }
   cart.push(itemObj);
   return `${itemName} has been added to your cart.`
  }

function viewCart()
  {
    let yourCart = "Your shopping cart is empty"
    if (cart.length > 0)
      {
        yourCart = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
        if (cart.length>1)
        {
          let i = 1;
          while (i < (cart.length)-1)
          {
            yourCart = yourCart + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
            i += 1;
          }
          yourCart = yourCart + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
        }
      }
    yourCart = yourCart + ".";
    return yourCart;
  }

function total()
  {
    let total = 0;
    for (var i = 0; i < cart.length; i++)
      {
        total += cart[i].itemPrice;
      }
    return total;
  }

function removeFromCart(item)
  {
    var ret = "That item is not in your cart."
    for (var i = 0; i < cart.length; i++)
    {
      if (item === cart[i].itemName)
        {
          ret = cart.splice(i,1);
        }
    }
    return ret;
  }

function placeOrder(cardNumber)
  {
    var cardExists = "Sorry, we don't have a credit card on file for you."
    if(cardNumber != undefined)
    {
      cardExists = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
      cart = [];
    }
    return cardExists;
  }
