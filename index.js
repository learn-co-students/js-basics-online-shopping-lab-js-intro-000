 var cart = [];

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
function getCart(){
	return cart;
}
function addToCart(item){
	//randomly prices item
	var price = Math.floor(Math.random(0, 100));
	//adding item & price to cart as object
	cart.push({item: price});
	//item has been added
	console.log(item +" has been added to your cart.")
	//return cart
	return cart;
}
function viewCart(){
	for(var i = 0; i <= cart.length; i++){
		if(cart.length === 0){
			console.log("Your shopping cart is empty.");
		}
		else{
			console.log("In your cart you have "+ cart.item + "at" + cart.price + "."); 
		}
	}
}