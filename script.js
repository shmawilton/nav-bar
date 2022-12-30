const nav = document.querySelector('.nav');
const popup = document.getElementById("popup");
const menu = document.querySelector('.nav ul');
const content = document.querySelector('.paragraph');
const read_more = document.querySelector('#read-more');
const content_to_blur = document.querySelector('.contents');
const counts = 0;
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
        menu.classList.add('active');
    } else {
        nav.classList.remove('active');
        menu.classList.remove('active');
    }

    if (counts < 1) {
        if (window.scrollY > content_to_blur.offsetHeight + 1200 || window.scrollY > content_to_blur.offsetHeight + 950) {
            content_to_blur.classList.add('blur-active');
            popup.classList.add("active");
        } else {
            content_to_blur.classList.remove('blur-active');
            popup.classList.remove("active");
        }
    }

    counts++;
    
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

function toggle1() {
    popup.classList.remove("active");
    content_to_blur.classList.remove('blur-active');
}



// prevening the #about etc from showing in the url

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            const top = target.offsetTop;
            window.scrollTo({
                top,
                behavior: 'smooth',
            });
        }
    });
});
