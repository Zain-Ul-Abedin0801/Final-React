// Cart.js
export const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart to localStorage
export const saveToStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Function to add a book to the cart
export const addToCart = (bookId) => {
  const existingItem = cart.find((item) => item.bookId === bookId);
  
  if (existingItem) {
    existingItem.quantity += 1;  // If item exists, increment quantity
  } else {
    cart.push({
      bookId,
      quantity: 1,
    });
  }

  saveToStorage(); // Save to localStorage
};

// Function to update the quantity of a book
export const updateQuantity = (bookId, quantity) => {
  const existingItem = cart.find((item) => item.bookId === bookId);
  
  if (existingItem) {
    existingItem.quantity = quantity;
  }
  
  saveToStorage(); // Save to localStorage
};

// Function to remove a book from the cart
export const removeFromCart = (bookId) => {
  const updatedCart = cart.filter((item) => item.bookId !== bookId);
  cart.length = 0;  // Clear the existing cart
  cart.push(...updatedCart);  // Update the cart with the filtered items

  saveToStorage(); // Save to localStorage
};

// Function to get the total number of items in the cart
export const getCartQuantity = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Function to get the total price of items in the cart
export const getCartTotal = () => {
  return cart.reduce((total, item) => total + item.quantity * 10, 0);  // Assuming each book is $10
};
