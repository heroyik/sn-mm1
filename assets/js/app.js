document.addEventListener('DOMContentLoaded', () => {
    const themeBtns = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;
    
    // Load saved theme or default to minimalist
    const savedTheme = localStorage.getItem('theme') || 'minimalist';
    setTheme(savedTheme);

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            setTheme(theme);
        });
    });

    function setTheme(theme) {
        // Update html attribute for CSS variables
        if (theme === 'minimalist') {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', theme);
        }

        // Update active button state
        themeBtns.forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Save preference
        localStorage.setItem('theme', theme);
    }
});
