function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
function toggleWishlist(heart) {
    heart.classList.toggle('clicked');
}
function toggleWishlist(heart) {
    heart.classList.toggle('clicked');
}
function toggleSection() {
    const section = document.getElementById('expandableSection');
    section.classList.toggle('expanded');
}
