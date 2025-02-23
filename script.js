function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check if a theme preference exists in local storage
  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️"; // Change to sun icon
  }

  // Toggle dark mode on button click
  themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
          themeToggle.textContent = "☀️"; // Switch to sun icon
          localStorage.setItem("theme", "dark");
      } else {
          themeToggle.textContent = "🌙"; // Switch back to moon icon
          localStorage.removeItem("theme");
      }
  });
});
