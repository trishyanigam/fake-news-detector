const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

const DARK_ICON = "🌙"; 
const LIGHT_ICON = "☀️"; 

const savedTheme = localStorage.getItem("theme") || "light";

root.setAttribute("data-theme", savedTheme);

toggleBtn.textContent = savedTheme === "dark" ? LIGHT_ICON : DARK_ICON;

toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  toggleBtn.textContent = newTheme === "dark" ? LIGHT_ICON : DARK_ICON;
});
