var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  let itemName = item;

  function itemPrice (min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }

  cart.push({[itemName]: itemPrice(1,100)});

  console.log(`${itemName} has been added to your cart.`)

  return cart;
}


function viewCart() {
  var fullcart = "In your cart, you have";

    for (let i = 0; i < cart.length; i++){
      var keys = Object.keys(cart[i]);
      var values = (cart[i][keys]);

      if ((cart[cart.length - 1] === cart[i]) && (cart.length === 1)){
        fullcart += ` ${keys} at $${values}.`;

      } else if ((cart[cart.length - 1] === cart[i]) && (cart.length > 1)){
          fullcart += ` and ${keys} at $${values}.`;

        } else if (cart.length === 2 && cart[cart.length - 2] === cart[i]) {
          fullcart += ` ${keys} at $${values}`;

          } else { fullcart += ` ${keys} at $${values},`;
            }
    }

    if (cart.length === 0){console.log ("Your shopping cart is empty.");

    } else {console.log(fullcart)
      }
}


function total() {
  var totalCost = 0;

  for(let i = 0; i < cart.length; i++){

    var keys = Object.keys(cart[i]);
    var values = (cart[i][keys]);

    totalCost += values;
  }

return totalCost;
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){

    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }

  console.log( "That item is not in your cart.");
}


function placeOrder(cardNumber) {
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else { console.log ("Sorry, we don't have a credit card on file for you.");
    }
}
