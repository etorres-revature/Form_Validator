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
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if (re.test(input.value.trim())){
    showSuccess(input);
 }else {
     showError(input, `${getFieldName(input)} is not a valid entry.`)
 }
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

//check input is the required min/max length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  };
}

//check for password match
function checkPasswordMatch(input1, input2){
if(input1.value !== input2.value){
    showError(input2, `Passwords do not match.`)
}
}

//get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listener
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2)
});
