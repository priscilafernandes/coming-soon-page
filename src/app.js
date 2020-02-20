const formEmail = document.getElementById("form-email");
const btnEmail = document.getElementById("btn-email");
btnEmail.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();

  let inputEmail = document.getElementById("input-email");
  const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!validate.test(inputEmail.value) || inputEmail.value.length <= 0) {
    errorMsg();
  } else {
    alert("Submit!");
    formEmail.reset();
  } 
}

function errorMsg() {
  renderErrorIcon();
  renderErrorMsg();
  btnEmail.removeEventListener("click", submit);
}

function renderErrorIcon() {
  let node = document.createElement("img");
  node.setAttribute("src", "./images/icon-error.svg");
  node.classList.add("error-icon");
  node.id = "error-icon";
  formEmail.appendChild(node);
}

function renderErrorMsg() {
  let node = document.createElement("p");
  let msg = document.createTextNode("Please provide a valid email");  
  node.classList.add("error-msg");
  node.id = "error-msg";
  node.appendChild(msg);  
  document.getElementById("block-email").appendChild(node);
}