const btnEmail = document.getElementById("btn-email");
btnEmail.addEventListener("click", submit);

function submit() {
  let inputEmail = document.getElementById("input-email").value;
  const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!validate.test(inputEmail)) {
    errorMsg();
  } else {
    alert("Submit!");
  }
}

function errorMsg() {
  btnEmail.removeEventListener("click", submit);
  renderErrorIcon();
  renderErrorMsg();
}

function renderErrorIcon() {
  let node = document.createElement("img");
  node.setAttribute("src", "./images/icon-error.svg");
  node.classList.add("error-icon");
  document.getElementById("form-email").appendChild(node);
}

function renderErrorMsg() {
  let node = document.createElement("p");
  let msg = document.createTextNode("Please provide a valid email");  
  node.classList.add("error-msg");
  node.appendChild(msg);  
  document.getElementById("block-email").appendChild(node);
}