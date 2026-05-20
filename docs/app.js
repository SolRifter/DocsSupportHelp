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

    const ENABLE_DARK = () => {
        document.documentElement.classList.add("dataThemeDark");
        localStorage.setItem(THEME_STR, DARKMODE);
    }

    const ENABLE_LIGHT = () => {
        document.documentElement.classList.remove("dataThemeDark");
        localStorage.removeItem(THEME_STR);
    }

    if (SAVEDTHEME === "dark" || (!SAVEDTHEME && SYSTEM_PREFERS_DARK)) {
        ENABLE_DARK();
    }

    // swap
    TOGGLEBTN.addEventListener("click", () => {
        if (document.documentElement.classList.contains("dataThemeDark")) {
            ENABLE_LIGHT();
        } else {
            ENABLE_DARK();
        }
    })
});