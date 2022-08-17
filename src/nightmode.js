const themeButton = document.querySelector(".theme");

const getCurrentTheme = () => {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  return theme;
};

const loadTheme = (theme) => {
  const root = document.querySelector(":root");
  if (theme === "light") {
    themeButton.innerHTML = "☀️";
  } else {
    themeButton.innerHTML = "🌙";
  }
  root.setAttribute("color-scheme", `${theme}`);
};

let theme = getCurrentTheme();
themeButton.addEventListener("click", () => {
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
