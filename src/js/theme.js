console.log("theme.js loaded");

const KEY = 'theme';

function systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
}

export function initThemeToggle() {
    let theme = localStorage.getItem(KEY);

    if (!theme) {
        theme = systemPrefersDark() ? 'dark' : 'light';
        localStorage.setItem(KEY, theme);
    }

    console.log("initial theme:", theme);

    applyTheme(theme === 'dark');

    const btn = document.getElementById('theme-toggle');
    if (!btn) {
        console.warn("theme button not found");
        return;
    }

    btn.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';

        console.log("switching to:", theme);

        localStorage.setItem(KEY, theme);

        applyTheme(theme === 'dark');
    });
}
