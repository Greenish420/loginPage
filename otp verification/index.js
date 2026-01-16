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


let timeLeft = 60;
const timerDisplay = document.getElementById("timer");

const countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    if (timeLeft === 0) {
        clearInterval(countdown);
        timesUp();
    }
    timeLeft--;
}, 1000);

function timesUp() {
    alert("Time's up!");
}
