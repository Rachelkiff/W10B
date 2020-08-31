function clearSelection() {
    Cookies.remove('selection');
    window.open("index.html", "_self");
}
var userSelection = Cookies.get("selection");

if(userSelection == 'Grizzly Bear') {
    document.getElementById("selection-container").innerHTML = "<p>Grizzly Bear</p>";

}else if(userSelection == 'Polar Bear') {
    document.getElementById("selection-container").innerHTML = "<p>Polar Bear</p>";

}else if(userSelection == 'Black Bear') {
    document.getElementById("selection-container").innerHTML = "<p>Black Bear</p>";

}else {
    document.getElementById("selection-container").innerHTML = "<p>Not a correct selection</p>";
}