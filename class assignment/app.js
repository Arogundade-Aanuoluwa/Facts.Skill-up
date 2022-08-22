
const hTag = document.querySelector("h1")
//instantiate api
const http = new api()
// set time interval for function to load every 5 sec
setInterval(() => {
    // get users
    http.get("https://catfact.ninja/fact")
    .then(data =>hTag.innerHTML = data.fact)
    .catch(err => console.error(err));
    
}, 5000);

