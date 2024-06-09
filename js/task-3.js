const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputName.addEventListener("input", (evt) => {
  const clearInput = evt.target.value.trim();
  if (clearInput === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = clearInput;
  }
});
