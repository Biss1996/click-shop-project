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
