// For now, just a greeting in console
console.log("Profile page loaded successfully!");

// Example: highlight skills when clicked
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skills span");

  skills.forEach(skill => {
    skill.addEventListener("click", () => {
      skill.style.background = "#3498db";
      skill.style.color = "#fff";
    });
  });
});
