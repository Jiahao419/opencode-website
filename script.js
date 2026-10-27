const STORAGE_KEY = "theme";

const toggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextLabel = nextTheme === "light" ? "Switch to Light Mode" : "Switch to Dark Mode";
  themeLabel.textContent = nextLabel;
  toggle.setAttribute("aria-label", nextLabel);
}

applyTheme(getPreferredTheme());

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
