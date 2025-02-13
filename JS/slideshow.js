var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slidesImg");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade"); // Tilføj fade-klassen
    setTimeout(showSlides, 5000); // Skift billede hver 5. sekund
}