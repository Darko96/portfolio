const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim().length >= 5) {
      this.classList.remove("invalid");
    } else {
      this.classList.add("invalid");
    }
  });
});
