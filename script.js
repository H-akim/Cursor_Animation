var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById('gallery');
var images = new Array(
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
);

for(let i=0; i < btn.length; i++){
    btn[i].onclick = function(){
        gallery.src = images[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    }
}


// cursor style

var cursor = document.getElementById("cursor");
document.onmousemove = function(e){
    cursor.style.left = (e.pageX - 25 )+ "px";
    cursor.style.top = (e.pageY - 25 )+ "px";
    cursor.style.display = "block"
}