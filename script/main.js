window.onscroll = function() {
    stickyHeader();
};

var header = document.querySelector("header");
var sticky = header.offsetTop;
var tolerance = 10;

function stickyHeader() {
    if (window.pageYOffset > sticky + tolerance) {
        if (!header.classList.contains("sticky")) {
            header.classList.add("sticky");
        }
    } else {
        if (header.classList.contains("sticky")) {
            header.classList.remove("sticky");
        }
    }
}


const hamburger = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});
