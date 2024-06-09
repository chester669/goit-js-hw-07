const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formElements = evt.target.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const formData = { email, password };
  console.log(formData);
  evt.target.reset();
});
