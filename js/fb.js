var n = 0; // nr de like-uri
function like(){
    n++;
    var button = document.getElementById("like");
    button.innerHTML = "Like &#128076; ("+n+")";
}