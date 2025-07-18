const roles = ["Chef", "Web Developer"];
let currentIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeRole() {
  const role = roles[currentIndex];
  if (charIndex < role.length) {
    typingElement.textContent += role.charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  const role = roles[currentIndex];
  if (charIndex > 0) {
    typingElement.textContent = role.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    currentIndex = (currentIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}
document.addEventListener("DOMContentLoaded", typeRole);




  window.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach((skill, index) => {
      const percent = skill.getAttribute("data-percent");
      const progress = skill.querySelector(".progress");

      // Add staggered animation delay
      progress.style.animationDelay = `${index * 0.2}s`;
      progress.style.setProperty('--target-width', percent);

      // Animate the width
      setTimeout(() => {
        progress.style.width = percent;
      }, 100);
    });
  });
