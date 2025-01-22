let wishlist = [];
// Function to add product to wishlist
function addToWishlist(productName) {
    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        renderWishlist();
    } else {
        alert('This item is already in your wishlist.');
    }
}
// Function to render wishlist
function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlist');
    wishlistContainer.innerHTML = '';  // Clear the list before re-rendering
    wishlist.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        // Add remove button for each item in wishlist
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromWishlist(item);
        li.appendChild(removeBtn);
        wishlistContainer.appendChild(li);
    });
}
// Function to remove item from wishlist
function removeFromWishlist(item) {
    wishlist = wishlist.filter(wish => wish !== item);
    renderWishlist();
}
// Function to clear wishlist
function clearWishlist() {
    wishlist = [];
    renderWishlist();
}
