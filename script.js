const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // verifica esta vazio?
  if (nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }
  //verifica email esta vazio e e velido=?
  if (emailInput.value === "" || !isEmailvalid(emailInput.value)) {
    alert("Por favor, preencha seu email");
    return;
  }
  //verifica esta preenchido
  if (!isSenhavalid(passwordInput.value, 8)) {
    alert("A senha precisa de no minimo oito digitos");
    return;
  }
  //verifica situacao selecionada
  if (jobSelect.value === "") {
    alert("Por favor, selecione sua situação");
    return;
  }
  //verifica mensagem
  if (messageTextarea.value === "") {
    alert("Por favor, escreva sua mensagem");
    return;
  }
  //enviar form
  form.submit();
});

// funcao valida email
function isEmailvalid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function isSenhavalid(password, minDigitos) {
  if (password.length >= minDigitos) {
    return true;
  }
  return false;
}
