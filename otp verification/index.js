const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});




const inputs = document.querySelectorAll(".field input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    paste.split("").forEach((char, i) => {
      if (i < inputs.length && /[0-9]/.test(char)) {
        inputs[i].value = char;
      }
    });
    inputs[Math.min(paste.length, inputs.length) - 1].focus();
  });
});
