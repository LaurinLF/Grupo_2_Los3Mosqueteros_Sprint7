window.addEventListener("load", function () {
    const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  
    const form = document.querySelector(".loginRegisterForm");
  
    const emailInput = document.querySelector("input#email");
    const passwordInput = document.querySelector("input#password");
    const emailError = document.querySelector("div#emailErrorFront");
    const passwordError = document.querySelector("div#passwordErrorFront");
  
    let errors = {};
  
    let ValEmail = () => {
      let feedback = "";
  
      if (emailInput.value.trim() == "") {
        feedback = "El campo de email no puede estar vacío";
      } else if (!RegExpEmail.test(emailInput.value)) {
        feedback = "Debes colocar un formato de email válido";
      }
  
      if (feedback) {
        emailInput.classList.remove("isValid");
        emailInput.classList.add("isInvalid");
  
        errors.emailInput = feedback;
      } else {
        emailInput.classList.remove("isInvalid");
        emailInput.classList.add("isValid");
        delete errors.emailInput;
      }
  
      emailError.innerText = feedback;
    };
  
    let passwordErrorValidacion = () => {
      let feedback = "";
  
      if (passwordInput.value.trim() == "") {
        feedback = "Debes ingresar una contraseña";
      }
  
      if (feedback) {
        passwordInput.classList.remove("isValid");
        passwordInput.classList.add("isInvalid");
        errors.passwordInput = feedback;
      } else {
        passwordInput.classList.remove("isInvalid");
        passwordInput.classList.add("isValid");
        delete errors.passwordInput;
      }
  
      passwordError.innerText = feedback;
    };
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      ValEmail();
      passwordErrorValidacion();
  
      if (Object.keys(errors).length) {
        e.preventDefault();
      } else {
        form.submit();
      }
    });
  
    emailInput.addEventListener("input", ValEmail);
    passwordInput.addEventListener("input", passwordErrorValidacion);
  });