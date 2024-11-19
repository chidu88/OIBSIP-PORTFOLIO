// script.js

document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".animated-text");
    const words = ["Hello,", "I'm Jagruti,", "Welcome to My Portfolio"];
    let i = 0;
  
    function typeText() {
      if (i < words.length) {
        text.textContent = words[i];
        i++;
        setTimeout(typeText, 2000);
      }
    }
  
    typeText();
  });
  