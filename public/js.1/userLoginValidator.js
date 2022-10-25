window.addEventListener('load', function(){
    const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i 

    /* Capturamos el form */
    const form = document.querySelector('.loginRegisterForm')
    
    /* input */
    const emailLogin = document.querySelector('input.control')
    const passwordLogin = document.querySelector('input.control')
    
    
    let errors = {}
    
    let ValEmail = async () =>{

        let feedback = ""
    
        let errorValidacion = document.querySelector('div#errorValidacion')
    
        if(emailLogin.value.trim() == ""){
            feedback = "El campo de email no puede estar vacío"
        } else if (!RegExpEmail.test(emailLogin.value)){
            feedback = "Debes colocar un formato de email válido"
        }
    
    
        if(feedback){
            
            emailLogin.classList.remove('isValid')
            emailLogin.classList.add('isInvalid')
            
            errors.loginEmail = feedback
        } else { 
            emailLogin.classList.remove('isInvalid')
            emailLogin.classList.add('isValid')
            delete errors.emailLogin 
        }
    
        errorValidacion.innerText = feedback
    }
    
    let passwordErrorValidacion = () =>{
    
        let feedback = ""
    
        let errorValidacion = document.querySelector('div#errorValidacion')
    
        if(passwordLogin.value.trim() == ""){
            feedback = "Debes ingresar una contraseña"
        }
    
        if(feedback){
            passwordLogin.classList.remove('isValid')
            passwordLogin.classList.add('isInvalid')
            errors.passwordLogin = feedback
        } else { 
            passwordLogin.classList.remove('isInvalid')
            passwordLogin.classList.add('isValid')
            delete errors.passwordLogin 
        }
    
        errorValidacion.innerText = feedback
    }
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
        ValEmail()
        passwordErrorValidacion()
    
        if(Object.keys(errors).length){
            e.preventDefault()
        }else{
            form.submit()
        }
    })
    
    emailLogin.addEventListener("input", ValEmail)
    passwordLogin.addEventListener("input", passwordErrorValidacion)
    
    
    })