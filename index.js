var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
let price = Math.floor(Math.random() * 101);
let products = new Object({itemName : item, itemPrice : price})
cart = [...cart, products];
return `${item} has been added to your cart.`;
}
// function addToCart(item) {
// 	let itemPrice = Math.floor(Math.random() * 101);
// 	cart.push({[item] : itemPrice});
// 	console.log(`${item} has been added to your cart.`);
// 	return cart;
// }

function viewCart() {
  let shopCart = [];

	if (cart.length === 0) {
		return `Your shopping cart is empty.`;
	} else if (cart.length === 1) {
    shopCart.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`);
  } else {
    for (let i = 0; i < cart.length-1; i++) {
      shopCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    shopCart.push(` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`);
  }
  return `In your cart, you have${shopCart}.`;
}
  // }
    // else if (cart.length === 2) {
    //   cartCont += (`${shopCart[0]} and ${shopCart[1]}.`)
    // } else if (shopCart.length > 2) {
    //   let element = shopCart.pop();
    //   let otherItem = shopCart.join(", ");
    //   cartCont += (`${otherItem}, and ${element}.`)
    // }

function total() {
	let result = 0;
	for(let i = 0; i < cart.length; i++) {
		result += cart[i].itemPrice;
	}
	return result;
}

// function removeFromCart(remItem = []) {
// 	let tempItem = [];
//
// 	while (item >= 0) {
// 		if (!item) {
// 			return `That item is not in your cart.`;
// 		}
// 		tempItem.push(item.name)
// 	}
// 	return tempItem;
// }
function removeFromCart(item) {
  let tempItem = [];
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  let cartTotal = total();
	if(cardNumber !== undefined) {
    cart = [];
  	return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
  	return `Sorry, we don't have a credit card on file for you.`;
  }
}
