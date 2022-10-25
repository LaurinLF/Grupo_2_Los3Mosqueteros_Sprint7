window.addEventListener('load', function(){

    const form = document.querySelector('.loginRegisterForm')
    
    /*  inputs */
    const avatar = document.querySelector('input#avatar')
    const firstName = document.querySelector('input#firstName')
    const lastName = document.querySelector('input#lastName')
    const email = document.querySelector('input#email')
    const password = document.querySelector('input#password')
    const checkpassword = document.querySelector('input#checkpassword')

    
    /* Regex */
    const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    const RegExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i
    const RegExpAvatar = /(.jpg|.jpeg|.png|.gif)$/i

    let errors = {}
    
    let avatarVal = () => {
        
        feedback = ""
    
        const errorValidacion = document.querySelector('div#errorValidacion')
    
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
    
        errorValidacion.innerText = feedback
    }
    
    let firstNameVal = () =>{
    
        let feedback = ""
    
        const errorValidacion = document.querySelector('div#errorValidacion')
    
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
    
        errorValidacion.innerText = feedback
        
    }
    
    let lastNameVal = () =>{
    
        let feedback = ""
    
        const errorValidacion = document.querySelector('div#errorValidacion')
    
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
    
        errorValidacion.innerText = feedback
        
    }

    
    let emailVal = () =>{
    
    
        let feedback = ""
    
        let errorValidacion = document.querySelector('div#errorValidacion')
    
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
    
        errorValidacion.innerText = feedback
    }
    
    let passwordVal = () =>{
    
        let feedback = ""
    
        let errorValidacion = document.querySelector('div#errorValidacion')
    
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
    
        errorValidacion.innerText = feedback
    }
    
    let checkpasswordVal = () =>{
    
        let feedback = ""
    
        const errorValidacion = document.querySelector('div#errorValidacion')
    
        if(checkpassword.value.trim() == ""){
            feedback = "Debes reingresar la contraseña"
        } else if (checkpassword.value != password.value){
            feedback = "Las contraseñas no coinciden"
        }
    
        if(feedback){
            checkpassword.classList.remove('isValid')
            checkpassword.classList.add('isInvalid')
            errors.checkpassword = feedback
        } else { 
            checkpassword.classList.remove('isInvalid')
            checkpassword.classList.add('isValid')
            delete errors.checkpassword 
        }
    
        errorValidacion.innerText = feedback
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
    checkpassword.addEventListener("input", checkpasswordVal)
    avatar.addEventListener("input", avatarVal)
    })