const hTag = document.querySelector("h1")
const http = new api()
setInterval(() => {
    http.get("https://catfact.ninja/fact")
    .then(data =>hTag.innerHTML = data.fact)
    .catch(err => console.error(err));
    
}, 5000);

