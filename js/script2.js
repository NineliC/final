/*hamburger menu*/
function responsiveMenu() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
function hideMenu() {
    var x = document.getElementById("myNav");
    if (x.className !=="nav") {
        x.className = "nav";
    }
}

/*year*/
function getYear(){
    var d =new Date();
    var yr=d.getFullYear();
    document.getElementById("year").innerHTML =yr;
}