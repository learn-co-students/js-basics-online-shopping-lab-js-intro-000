var cart = [];

function getCart() {
	return cart;
}

function setCart(c) {
	cart = c;
	return cart;
}

function addToCart(item) {
	var price = Math.floor((Math.random() * 100) + 1);
	var itemName = item.toString();
	var itemObject = {
		[itemName]: price
	};
	cart.push(itemObject)
	console.log(`${itemName} has been added to your cart.`)
	return cart
}

function viewCart() {
	if (cart.length === 0) {
		console.log("Your shopping cart is empty.")
    return;
	}
  else if (cart.length === 1) {
		var items = [];
		for (var i = 0; i < cart.length; i++) {
			for (var item in cart[i]) {
				items.push(item + " at $" + cart[i][item])
			}
		}
		console.log("In your cart, you have " + items +".");
    return
	}
  else if (cart.length === 2) {
		var items = [];
		for (var i = 0; i < cart.length; i++) {
			for (var item in cart[i]) {
				items.push(item + " at $" + cart[i][item])
			}
		}
		console.log("In your cart, you have " + items.join(" and ") + ".");
    return
	}
  else {
		var items = [];
		for (var i = 0; i < cart.length; i++) {
			if (i < cart.length - 1) {
				for (var item in cart[i]) {
					items.push(item + " at $" + cart[i][item])
				}
			} else {
				for (var item in cart[i]) {
					items.push("and " + item + " at $" + cart[i][item]);
				}
			}
		}
    console.log("In your cart, you have " + items.join(", ") + ".");
    return;
	}
}


addToCart("apples");
addToCart("bananas");
addToCart("blue bananas");
addToCart("red bananas");
viewCart();

console.log(cart);

function total() {
  var price = 0;
  for (var i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
    price += cart[i][item];
  }
  }
  console.log(price);
  return price;
}

total();


function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
    return false;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

  cart = [];
}
