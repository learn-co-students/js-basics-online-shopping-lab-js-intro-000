var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random() * 100);
  var newItem = {};
  newItem['itemName'] = item;
  newItem['itemPrice'] = randomPrice;
  cart.push(newItem);
	return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
  var cartArray = ["In your cart, you have "];
  for (var i = 0; i < cart.length; i++) {
    var itemInCart = cart[i]['itemName'];
    var priceInCart = cart[i]['itemPrice'];
    
	if(cart.length === 1) {
		cartArray.push(`${itemInCart} at $${priceInCart}.`);
    } else if (i < (cart.length - 1)) {
		cartArray.push(`${itemInCart} at $${priceInCart}, `);
  	} else {
		cartArray.push(`and ${itemInCart} at $${priceInCart}.`);
    }
  }
	var cartString = cartArray.join('');
	return cartString;
}
}

undefined
viewCart();
"In your cart, you have rice at $70, bananas at $18, and peanuts at $62."

console.log(cart[0]['itemName'])

function total() {
  	var totalArray = [];
	for (var j = 0; j < cart.length; j++) {
		totalArray.push(cart[j]['itemPrice']);
		}
	function getSum(total, num) {
		return total + num;
		}

	var cartTotal = totalArray.reduce(getSum);
	return cartTotal;
	}

function removeFromCart(item) {
  for (var k = 0; k < cart.length; k++) {
	  if(cart[k]['itemName'] === item) {
		  cart.splice(k, 1);
		  var itemRemoved = 'yes';
      }
    }
  if(itemRemoved === 'yes') {
		return cart;
  } else {
		return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    var totalCost = total();
    for(var m = 0; cart.length > m; m++) {
      cart.splice(m, 1);
    }
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
