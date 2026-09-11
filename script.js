const secret = document.getElementById("h1index");
let clics = 0;
secret.addEventListener("click", function() {
    clics++;

    if (clics == 7) {
    window.location.href = "secret.html"
    
}
});
