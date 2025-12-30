// Initialize cart and total
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// Remove item from cart
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
}

// Clear cart
function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}
