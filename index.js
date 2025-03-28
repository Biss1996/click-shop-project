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

