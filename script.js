var modal = document.getElementById("imageModal");

var btn = document.getElementById("showImageBtn");

var span = document.getElementById("closeModal");

btn.onclick = function() {
    modal.style.display = "flex"; 
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
