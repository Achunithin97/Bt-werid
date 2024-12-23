// Accordion Section

document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('hidden');
  });
});

// Size Section

var header = document.getElementById("size-options");
var btns = header.getElementsByClassName("size");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Quantity Section

// Quantity Selector Logic
// var quantity = document.querySelector(".quantity");
// var minus = document.getElementById("minus");
// var plus = document.getElementById("plus");
// var cartValue = document.getElementById("cart-value");
// var addToCart = document.querySelector(".add-to-cart");

// var count = 1;
// quantity.innerHTML = count;

// cartValue.style.display = "none";
// plus.addEventListener("click", function () {
//   count = count + 1;
//   quantity.innerHTML = count;
//   console.log(count);
// });

// minus.addEventListener("click", function () {
//   count = count - 1;
//   if (count < 1) count = 1;
//   quantity.innerHTML = count;
// });

// // Add to Cart Logic
// addToCart.addEventListener("click", function () {
//   cartValue.innerHTML = count; // Update the cart icon with the current quantity
//   cartValue.style.display = "block"; // Ensure the cart value is visible
//   console.log("Cart updated with quantity: " + count);
// });
// Quantity Selector Logic
var sizeOptions = document.querySelectorAll(".size");
var quantityDisplay = document.querySelector(".quantity");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var cartValue = document.getElementById("cart-value");
var addToCart = document.querySelector(".add-to-cart");

// Object to track quantity for each size
var sizeQuantities = {};

// Initialize default size and quantities
var selectedSize = "M"; // Default active size
sizeOptions.forEach((size) => {
  // Initialize all sizes with a quantity of 0
  sizeQuantities[size.innerHTML] = 0;

  // Add click listener to set the active size
  size.addEventListener("click", function () {
    selectedSize = this.innerHTML; // Update selected size
    document.querySelector(".size.active").classList.remove("active");
    this.classList.add("active");

    // Update the quantity display based on selected size
    quantityDisplay.innerHTML = sizeQuantities[selectedSize];
  });
});

// Update quantity display
function updateQuantityDisplay() {
  quantityDisplay.innerHTML = sizeQuantities[selectedSize];
}

// Plus button event
plus.addEventListener("click", function () {
  sizeQuantities[selectedSize] += 1;
  updateQuantityDisplay();
});

// Minus button event
minus.addEventListener("click", function () {
  if (sizeQuantities[selectedSize] > 0) {
    sizeQuantities[selectedSize] -= 1;
    updateQuantityDisplay();
  }
});
cartValue.style.display = "none";
// Add to Cart Logic
addToCart.addEventListener("click", function () {
  var totalCartQuantity = Object.values(sizeQuantities).reduce((a, b) => a + b, 0);

  // If total cart quantity is greater than 0, update cart value
  if (totalCartQuantity > 0) {
    cartValue.innerHTML = totalCartQuantity; // Update the cart icon with the total quantity
    cartValue.style.display = "block"; // Ensure the cart icon is visible
  } else {
    // If cart is empty, hide the cart value
    cartValue.style.display = "none";
  }

  console.log("Cart updated:", sizeQuantities);
});
// Show the empty cart popup
function showCartPopup() {
  const cartPopup = document.getElementById("cart-empty-popup");
  cartPopup.classList.remove("hidden");
}

// Close the cart popup
function closeCartPopup() {
  const cartPopup = document.getElementById("cart-empty-popup");
  cartPopup.classList.add("hidden");
}

// Redirect to shop page
function redirectToShop() {
  window.location.href = "/shop.html"; // Replace with your shop page URL
}

// Example: Trigger popup if cart is empty
function checkCartAndShowPopup() {
  const totalCartQuantity = Object.values(sizeQuantities).reduce((a, b) => a + b, 0);
  if (totalCartQuantity === 0) {
    showCartPopup();
  }
}

// Call this function when cart is accessed
checkCartAndShowPopup();