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

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (inputItem) {
    if (inputItem.value === "") {
      showError(inputItem, `${getFieldName(inputItem)} is a required field.`);
    } else {
      showSuccess(inputItem);
    }
  });
}

//get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listener
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
});
