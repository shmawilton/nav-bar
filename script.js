const nav = document.querySelector('.nav');
const menu = document.querySelector('.nav ul');
const content = document.querySelector('.paragraph');
const read_more = document.querySelector('#read-more');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
        menu.classList.add('active');
    } else {
        nav.classList.remove('active');
        menu.classList.remove('active');
    }
}

read_more.addEventListener('click', () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML ='Read more <i class="bi bi - caret - right"></i>';
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = 'Read less <i class="bi bi - caret - right"></i>';
        moreText.style.display = "inline";
    }
});

// toggle the .nav ul to show or hide when the toggle button is clicked and add an active class on the spans inside the toggle button
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
    menu.classList.toggle('collapse');
    toggle.classList.toggle('active');
});

