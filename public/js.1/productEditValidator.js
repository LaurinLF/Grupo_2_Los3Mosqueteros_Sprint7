window.addEventListener('load', function(){


    const form = document.querySelector('.loginRegisterForm')
   

  
    const name = document.querySelector('input#name')
    const description = document.querySelector('textarea#description')
    const image = document.querySelector('input#image')
   
    const errorName = document.querySelector('div#errorName')
    const errorDescription = document.querySelector('div#errorDescription')
    const errorImage = document.querySelector('div#errorImage')

   
    const RegExpImage = /(.jpg|.jpeg|.png|.gif)$/

    let errors = {}
    
    let nameValProduct = () => {

        feedback = ""
    
        // const errorValidacion = document.querySelector('#errorValidacion')
    
        if(name.value.trim() == ""){
            feedback = "Debes ingresar el nombre del producto"
        } else if (name.value.length < 5){
            feedback = "Tu nombre debe tener al menos 5 caracteres"
        }
    
        
        if(feedback){
            name.classList.remove('isValid')
            name.classList.add('isInvalid')
            errors.name = feedback
        } else { 
            name.classList.remove('isInvalid')
            name.classList.add('isValid')
            delete errors.name 
        }
    
        errorName.innerText = feedback
    }

    let descriptionVal = () => {

        feedback = ""
    
        // const errorValidacion = document.querySelector('#errorValidacion')
    
        if(description.value.trim() == ""){
            feedback = "Debes ingresar la descripción del producto"
        } else if (description.value.length < 20){
            feedback = "La descripción debe tener al menos 20 caracteres"
        } 
    
        
        if(feedback){
            description.classList.remove('isValid')
            description.classList.add('isInvalid')
            errors.description = feedback
        } else { 
            description.classList.remove('isInvalid')
            description.classList.add('isValid')
            delete errors.description 

            
        }
    
        errorDescription.innerText = feedback
    }

    let imageVal = (e) => {

        feedback = ""
    
        // const errorValidacion = document.querySelector('#errorValidacion')
        
        if(image.value == "" ){
            feedback = "Debes cargar al menos 1 imágen del producto"
        } 

        if(image.value != "" ){

            const files =  image.files

            for (let i = 0; i < files.length; i++){
                    let img = files[i].name
                    if(img.match(RegExpImage) == null){
                        feedback = "Los archivos requeridos son jpg, jpeg, png y GIF"
                    }
            }
            
        }

        
        if(feedback){
            image.classList.remove('isValid')
            image.classList.add('isInvalid')
            errors.image = feedback
        } else { 
            image.classList.remove('isInvalid')
            image.classList.add('isValid')
            delete errors.image 
        }
    
        errorImage.innerText = feedback
    }

    form.addEventListener("submit", function(e){
        e.preventDefault()
    
        imageVal()
        descriptionVal()
        nameValProduct()
    
        if(Object.keys(errors).length){
            e.preventDefault()
        }else{
            form.submit()
        }
    })

    name.addEventListener('input', nameValProduct)
    description.addEventListener('input', descriptionVal)
    image.addEventListener('input', imageVal)
})