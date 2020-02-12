const inputEmail = document.getElementById("input-email");
const btnEmail = document.getElementById("btn-email");
const formEmail = document.getElementById("form-email");

btnEmail.addEventListener("click", submit);

function submit() {
  let valueEmail = inputEmail.value;
  const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validate.test(valueEmail)) {
    alert("Submit!");
  } else {
    alert("email incorreto, tente novamente");
  }
}