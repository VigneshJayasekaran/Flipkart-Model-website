// script.js

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const searchTerm = searchInput.value.toLowerCase();

    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            item.style.display = 'block'; // Show the product
        } else {
            item.style.display = 'none'; // Hide the product
        }
    });
}

// Function to handle "Add to Cart" button clicks
function handleAddToCart(event) {
    if (event.target.tagName === 'BUTTON') {
        const productItem = event.target.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        alert(`Added ${productName} to cart`);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', handleSearch);

    const productList = document.querySelector('.product-list');
    productList.addEventListener('click', handleAddToCart);
});
