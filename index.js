var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var random = 1 + Math.floor(Math.random() * 99);
 cart.push({[item]: random});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  var announcement = 'In your cart, you have '
  if (cart.length === 1) {
    announcement += `'${cart[0][0]} at $${cart[0][1]}.'`;
  }
  console.log(announcement);
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
