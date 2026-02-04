const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// Icons
const DARK_ICON = "🌙"; // show when light mode is active
const LIGHT_ICON = "☀️"; // show when dark mode is active

// Get saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme
root.setAttribute("data-theme", savedTheme);

// Set correct icon on load
toggleBtn.textContent = savedTheme === "dark" ? LIGHT_ICON : DARK_ICON;

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Apply new theme
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update icon
  toggleBtn.textContent = newTheme === "dark" ? LIGHT_ICON : DARK_ICON;
});
