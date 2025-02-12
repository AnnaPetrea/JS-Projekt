document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;


    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';


    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }


    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');


        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '☾';


        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
});

