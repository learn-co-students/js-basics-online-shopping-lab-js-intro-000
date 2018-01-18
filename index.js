var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  for (let i = 0; i < item.length; i++) {
    var itemPrice = Math.floor(Math.random() * (100-1+1) + 1);
    var itemName = item;
    var object = {itemName : itemPrice};
    cart.push(object);
    console.log(`${item} has been added to your cart.`)
  }
  return cart;
}

/* describe("addToCart()", function() {
  it("can add items to the cart", function() {
    addToCart("apples");

    expect(getCart().length).toEqual(1);

    addToCart("bananas");

    expect(getCart().length).toEqual(2);
  });

  it("turns items into JavaScript objects before adding them to the cart", function() {
    addToCart("carrots");

    let itemConstructor = getCart()[0].constructor;

    expect(itemConstructor).toEqual(Object);
  });

  it("properly structures objects in the { itemName: itemPrice } format", function() {
    addToCart("daikon");

    let itemName = Object.keys(getCart()[0])[0];
    let itemPrice = getCart()[0][itemName];

    expect(itemName).toEqual("daikon");
    expect(Number.isInteger(itemPrice)).toBe(true);
  });

  it("sets the price as an integer between 1 and 100", function() {
    addToCart("eggplant");

    let itemPrice = getCart()[0]["eggplant"];

    expect(itemPrice).toBeLessThanOrEqualTo(100)
                     .toBeGreaterThanOrEqualTo(1);
  });

  it("chooses the price at random", function() {
    // Note: this test has a 1-in-10,000 chance of a false negative.
    addToCart("figs");
    addToCart("grapes");
    addToCart("halloumi");

    let prices = getCart().map(c => c[Object.keys(c)[0]]);
    let pricesEqual = prices[0] === prices[1] && prices[1] === prices[2];

    expect(pricesEqual).toBe(false);
  });


cart.[itemName] = itemPrice
Return cart;

MAKE ITEM PRICE $$$

Object.assign({}, {itemName : itemPrice});
Object.assign({}, item, {[itemName]: itemPrice});

function addToCart(item) {
  for (let i = 0; i < item.length; i++) {
    var itemPrice = Math.floor(Math.random() * (100-1+1) + 1);
    var itemName = item;
    item[itemName] = itemPrice;
    cart.push(item);
    console.log(`${item} has been added to your cart.`)
  }
  return cart;
}
*/

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
    const object = [];
    for (let i = 0; 1 < cart.length; i++) {
      object.push(`${cart[i]} at ${i}`)
    }
    return `In your cart, you have ${object.join(',')}.`;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
