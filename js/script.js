let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slides[slideIndex].classList.add("show");
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 10000);
}
window.onload = function () {
    const slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        slides[0].classList.add("show");
        showSlides();
    }
};

function plusSlides(n) {
    const slides = document.getElementsByClassName("slide");

    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }

    slides[slideIndex].classList.add("show");
}
