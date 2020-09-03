//global variables
const formEl = document.querySelector("#form");
const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const password2El = document.querySelector("#password2");

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check for valid email
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//event listener
formEl.addEventListener("click", function (event) {
  event.preventDefault();

  if (usernameEl.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (emailEl.value === "") {
    showError(email, "E-mail is required");
  } else if (!isValidEmail(emailEl.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (passwordEl.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2El.value === "") {
    showError(password2, "Confirm Password is required");
  } else {
    showSuccess(password2);
  }
});
