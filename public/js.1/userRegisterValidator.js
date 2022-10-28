window.addEventListener('load', function(){

    const form = document.querySelector('.loginRegisterForm')
    
    const avatar = document.querySelector('input#image')
    const firstName = document.querySelector('input#name')
    const lastName = document.querySelector('input#lastName')
    const email = document.querySelector('input#email')
    const password = document.querySelector('input#password')
    const checkPassword = document.querySelector('input#checkPassword')

    const errorAvatar = document.querySelector('div#errorAvatar')
    const errorName = document.querySelector('div#errorName')
    const errorLastName = document.querySelector('div#errorLastName')
    const errorEmail = document.querySelector('div#errorEmail')
    const errorPassword = document.querySelector('div#errorPassword')
    const errorCheck = document.querySelector('div#errorCheck')

    
    
    const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    const RegExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i
    const RegExpAvatar = /(.jpg|.jpeg|.png|.gif)$/i

    let errors = {}
    
    let avatarVal = () => {
        
        feedback = ""
        
        if(!RegExpAvatar.exec(avatar.value)){
            feedback = "Los archivos permitidos son jpg, jpeg, png y gif"
        } 
    
        
        if(feedback){
            avatar.classList.remove('isValid')
            avatar.classList.add('isInvalid')
            errors.avatar = feedback
        } else { 
            avatar.classList.remove('isInvalid')
            avatar.classList.add('isValid')
            delete errors.avatar 
        }
    
        errorAvatar.innerText = feedback
    }
    
    let firstNameVal = () =>{
    
        let feedback = ""
        
        if(firstName.value.trim() == ""){
            feedback = "Debes ingresar tu nombre"
        } else if (firstName.value.length < 2){
            feedback = "Tu nombre debe tener al menos 2 caracteres"
        }
    
        
        if(feedback){
            firstName.classList.remove('isValid')
            firstName.classList.add('isInvalid')
            errors.firstName = feedback
        } else { 
            firstName.classList.remove('isInvalid')
            firstName.classList.add('isValid')
            delete errors.firstName 
        }
    
        errorName.innerText = feedback
        
    }
    
    let lastNameVal = () =>{
    
        let feedback = ""
        
        if(lastName.value.trim() == ""){
            feedback = "Debes ingresar tu apellido"
        }else if (lastName.value.length < 2){
            feedback = "Tu apellido debe tener al menos 2 caracteres"
        }
        
        if(feedback){
            lastName.classList.remove('isValid')
            lastName.classList.add('isInvalid')
            errors.lastName = feedback
        } else { 
            lastName.classList.remove('isInvalid')
            lastName.classList.add('isValid')
            delete errors.lastName 
        }
    
        errorLastName.innerText = feedback
        
    }

    
    let emailVal = () =>{
    
    
        let feedback = ""
        
        if(email.value.trim() == ""){
            feedback = "El campo de email no puede estar vacío"
        }else if (!RegExpEmail.test(email.value)){
            feedback = "Debes poner un formato de email válido"
        }
    
    
        if(feedback){
            email.classList.remove('isValid')
            email.classList.add('isInvalid')
            errors.email = feedback
        } else { 
            email.classList.remove('isInvalid')
            email.classList.add('isValid')
            delete errors.email
        }
    
        errorEmail.innerText = feedback
    }
    
    let passwordVal = () =>{
    
        let feedback = ""
        
        if(password.value.trim() == ""){
            feedback = "Debes ingresar una contraseña"
        } else if (password.value.length < 8){
            feedback = "La contraseña debe tener al menos 8 caracteres"
        }else if(!RegExpPass.test(password.value)){
            feedback = "La contraseña debe tener una mayúscula, una minúscula, un número y caracter especial"
        }
    
        if(feedback){
            password.classList.remove('isValid')
            password.classList.add('isInvalid')
            errors.password = feedback
        } else { 
            password.classList.remove('isInvalid')
            password.classList.add('isValid')
            delete errors.password 
        }
    
        errorPassword.innerText = feedback
    }
    
    let checkpasswordVal = () =>{
    
        let feedback = ""
        
        if(checkPassword.value.trim() == ""){
            feedback = "Debes reingresar la contraseña"
        } else if (checkPassword.value != password.value){
            feedback = "Las contraseñas no coinciden"
        }
    
        if(feedback){
            checkPassword.classList.remove('isValid')
            checkPassword.classList.add('isInvalid')
            errors.checkPassword = feedback
        } else { 
            checkPassword.classList.remove('isInvalid')
            checkPassword.classList.add('isValid')
            delete errors.checkPassword 
        }
    
        errorCheck.innerText = feedback
    }
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
    
        firstNameVal()
        lastNameVal()
        userNameValidation()
        emailVal()
        passwordVal()
        checkpasswordVal()
    
        if(Object.keys(errors).length){
            e.preventDefault()
        }else{
            form.submit()
        }
    })
    
    firstName.addEventListener("input", firstNameVal)
    lastName.addEventListener("input", lastNameVal)
    email.addEventListener("input", emailVal)
    password.addEventListener("input", passwordVal)
    checkPassword.addEventListener("input", checkpasswordVal)
    avatar.addEventListener("input", avatarVal)
    })