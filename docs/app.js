document.addEventListener("DOMContentLoaded", () => {
    const TOGGLEBTN = document.getElementById("themeModeToggle")
    if (!TOGGLEBTN) {
        return;
    }

    const DARKMODE = "dark"
    const LIGHTMODE = "light"
    const THEME_STR = "theme"

    const SAVEDTHEME = localStorage.getItem(THEME_STR)
    const SYSTEM_PREFERS_DARK = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (SAVEDTHEME === "dark" || (!SAVEDTHEME && SYSTEM_PREFERS_DARK)) {
        document.documentElement.setAttribute("dataTheme", DARKMODE);
    } else {
        document.documentElement.setAttribute("dataTheme", LIGHTMODE);
    }

    TOGGLEBTN.addEventListener("click", () => {
        const CURRENT_THEME = document.documentElement.getAttribute("dataTheme");
        const NEW_THEME = CURRENT_THEME === DARKMODE ? LIGHTMODE : DARKMODE;

        document.documentElement.setAttribute("dataTheme", NEW_THEME);
        localStorage.setItem(THEME_STR, NEW_THEME);
    })
});