document.getElementById('fetchButton').addEventListener('click', fetchProducts);
document.getElementById('viewCartButton').addEventListener('click', viewCart);
document.getElementById('searchButton').addEventListener('click', searchProducts);
document.getElementById('filterButton').addEventListener('click', filterProducts);

let cart = [];
let allProducts = [];

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            allProducts = data; // Store all products
            displayProducts(data);
            populateFilterOptions(data);
        })
        .catch(error => console.error('Error fetching products:', error));
}

function getApi(){
    fetch('https://click-shop-project.onrender.com')
    .then(r => r.json())
    .then(d => console.log(d))
}
getApi()


function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ""; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" width="100">
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
        container.appendChild(productDiv);
    });
}
function addToCart(id, title, price, image) {
    cart.push({ id, title, price, image });
    document.getElementById('cartCount').textContent = cart.length;
    console.log("Cart:", cart);
}
function viewCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = "<h3>Cart Items</h3>";

    if (cart.length === 0) {
        cartContainer.innerHTML += "<p>Cart is empty</p>";
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h4>${item.title}</h4>
            <img src="${item.image}" width="50">
            <p>Price: $${item.price}</p>
        `;
        cartContainer.appendChild(itemDiv);
    });
}
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}
function populateFilterOptions(products) {
    const categorySet = new Set(products.map(product => product.category));
    const filterDropdown = document.getElementById('filterCategory');
    filterDropdown.innerHTML = '<option value="">All Categories</option>';

    categorySet.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterDropdown.appendChild(option);
    });
}
