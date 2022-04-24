const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmpassInput = document.getElementById("confirmpass");

function validate(attr, input) {
  document.getElementById(`form-control-${attr}`).className = `mb-3 ${
    input.trim() === "" && "error"
  }`;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  validate("name", nameInput.value);
  validate("address", addressInput.value);
  validate("phone", phoneInput.value);
  validate("password", passwordInput.value);
  if (passwordInput.value !== confirmpassInput.value) {
    confirmpassInput.value = "";
  }
  validate("confirmpass", confirmpassInput.value);
});