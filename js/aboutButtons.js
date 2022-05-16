const aboutButtons = document.querySelectorAll(".about-button");
const aboutContents = document.querySelectorAll(".about-content");

aboutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    aboutContents.forEach((content) => {
      if (button.id === content.id) {
        content.style.display = "block";
        return content.classList.add("active");
      }
      content.classList.remove("active");
      content.style.display = "none";
    });
  });
});
