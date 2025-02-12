document.addEventListener("DOMContentLoaded", function () {
    // Variabler og typer
    const backToTopButton = document.getElementById("backToTop");
    let positions = []; // Array to store scroll positions

    window.addEventListener("scroll", function () {
        let scrollPosition = window.innerHeight + window.scrollY;
        let bottom = document.body.offsetHeight;

        // Store positions in the array
        positions.push(scrollPosition);

        // Kontrolstruktur (if-else)
        if (scrollPosition >= bottom) {
            backToTopButton.style.display = "flex"; // Show button when at bottom
        } else {
            backToTopButton.style.display = "none"; // Hide button when not at bottom
        }
    });

    backToTopButton.addEventListener("click", function () {
        // Objekt example
        let scrollSettings = {
            top: 0,
            behavior: "smooth"
        };

        window.scrollTo(scrollSettings);

        // Kontrolstruktur (Loops) + Operatorer
        let sum = 0;
        for (let i = 0; i < positions.length; i++) {
            console.log("Previous scroll position: " + positions[i]);

            // Example of arithmetic operations
            sum += positions[i]; // Addition
        }

        let average = sum / positions.length || 0; // Division (avoiding NaN)
        let lastPosition = positions.length > 0 ? positions[positions.length - 1] : 0;
        let difference = lastPosition - average; // Subtraction
        let doubleAverage = average * 2; // Multiplication
    });
});

