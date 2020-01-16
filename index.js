var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  var price=Math.floor(Math.random() * (max - min + 1)) + min;
  var objitem={itemName:'name', itemPrice: 'Price' } ;
  objitem.itemName=item;
  objitem.itemPrice=price;
  cart.push(objitem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var l=cart.length;
  var k=l-1;
  var phrase=[];
  if(l==1){
	       phrase.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`);
	      	return "In your cart, you have"+phrase+".";
	     }
	 else if(l>1){
	   for (let i = 0; i<l-1; i++) {
	 phrase.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
	     }
	 phrase.push(` and ${cart[k].itemName} at $${cart[k].itemPrice}`);
	 return "In your cart, you have"+phrase+".";
	 }
  else{
    return "Your shopping cart is empty.";
  }
}

function total() {
  var l=cart.length;
  var sum=0;
  for(let i=0;i<l;i++){
    sum+=cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var l=cart.length;
  var itemisin=0;
  for(let i=0;i<l;i++){
    if(cart[i].itemName==item){
      itemisin=1;
      cart.splice(i, 1);
      return cart;
    }
  }
  if(itemisin!=1){
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var tot=total();
    cart=[];
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
  }
}
