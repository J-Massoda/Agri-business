// Menu show Y hidden 
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

// show mwnu  
// validate if constant exist 
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// Menu hidden 
// validate if constannt exists 

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// Remove Mobile Menu 

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //when u click on a nav link, u remove the show menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




// Login Profile animations 

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
var loader = document.getElementById('pre');
window.addEventListener("load", function () {
  loader.style.display = "none"
})

// cart 

// Get the add to cart button
var addToCartButton = document.querySelector('.add-to-cart');

// Add an event listener to the button
addToCartButton.addEventListener('click', function () {
  // Get the product name, description, and price
  var productName = document.querySelector('h2').textContent;
  var productDescription = document.querySelector('p:nth-of-type(2)').textContent;
  var productPrice = document.querySelector('p:nth-of-type(3)').textContent;

  // Create a new cart item object with the product information
  var cartItem = {
    name: productName,
    description: productDescription,
    price: productPrice
  };

  // Get the existing cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new cart item to the existing cart items
  cartItems.push(cartItem);

  // Save the updated cart items to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
});

// search  bar

var searchTimeout = null;

function searchProducts() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(function () {
    // Search function code goes here
  }, 500); // Delay in milliseconds
}