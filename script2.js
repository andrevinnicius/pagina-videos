function toggleTheme() {
    const body = document.body;
    const logo = document.getElementById('logo');
    const button = document.getElementById('theme-toggle');
    const logoImg = button.querySelector('img');
    const title = document.getElementById('page-title');
    const isDarkMode = body.classList.toggle('dark-mode');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    if (isDarkMode) {
        logo.src = '../img/logo2.png';
        logoImg.src = '../img/theme.png'; 
        logoImg.alt = 'Modo Claro';
        title.style.color = 'white';
    } else {
        logo.src = '../img/logo.png';
        logoImg.src = '../img/theme.png';
        logoImg.alt = 'Modo Escuro';
        title.style.color = 'black';
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const logo = document.getElementById('logo');
    const button = document.getElementById('theme-toggle');
    const logoImg = button.querySelector('img');
    const title = document.getElementById('page-title');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        logo.src = '../img/logo2.png';
        logoImg.src = '../img/theme.png';
        logoImg.alt = 'Modo Claro';
        title.style.color = 'white';
    } else {
        body.classList.remove('dark-mode');
        logo.src = '../img/logo.png';
        logoImg.src = '../img/theme.png';
        logoImg.alt = 'Modo Escuro';
        title.style.color = 'black';
    }
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    applySavedTheme();

    // Setup filter buttons
    setupFilterButtons();

    // Add event listener for nav toggle button
    const navToggle = document.getElementById('nav-toggle');
    navToggle.addEventListener('click', toggleNav);

    // Add focus event to search container
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.addEventListener('click', function () {
            const input = this.querySelector('input[type="text"]');
            input.focus();
        });
    }
});

function toggleNav() {
    const nav = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    nav.classList.toggle('hidden');

    if (nav.classList.contains('hidden')) {
        mainContent.style.paddingLeft = '0'; // Retira o espaçamento da esquerda quando a navegação estiver oculta
    } else {
        mainContent.style.paddingLeft = '20px'; // Reverte o espaçamento para o valor padrão
    }
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videos = document.querySelectorAll('.video-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            videos.forEach(video => {
                video.style.display = filter === 'all' || video.classList.contains(filter) ? 'block' : 'none';
            });
        });
    });
}
