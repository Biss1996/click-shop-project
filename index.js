function getApi(){
    fetch('https://click-shop-project.onrender.com')
    .then(r => r.json())
    .then(d => console.log(d))
}
getApi()