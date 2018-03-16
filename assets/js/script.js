function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNavBody() {
    if ($(window).width() > 725) {
        openNav();
    } 
}