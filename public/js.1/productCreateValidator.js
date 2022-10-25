window.addEventListener('load', function(){


    const form = document.querySelector('.loginRegisterForm')
   

    /* Capturamos el resto de los elementos del form */
    const name = document.getElementById('name')
    const description = document.getElementById('description')
    const image = document.getElementById('image')
   

    /* Expresiones regulares */
    const RegExpImage = /(.jpg|.jpeg|.png|.gif)$/

    let errors = {}
    
    let nameValProduct = () => {

        feedback = ""
    
        const errorValidacion = document.querySelector('#errorValidacion')
    
        if(name.value.trim() == ""){
            feedback = "Debes ingresar el nombre del producto"
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
    
        errorValidacion.innerText = feedback
    }

    let descriptionVal = () => {

        feedback = ""
    
        const errorValidacion = document.querySelector('#errorValidacion')
    
        if(description.value.trim() == ""){
            feedback = "Debes ingresar la descripción del producto"
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
    
        errorValidacion.innerText = feedback
    }

    let imageVal = (e) => {

        feedback = ""
    
        const errorValidacion = document.querySelector('#errorValidacion')
        
        if(image.value == "" ){
            feedback = "Debes cargar al menos 1 imágen del producto"
        } 

        if(image.value != "" ){

            const files =  image.files
            
            if (Object.keys(files).length != 2){
                feedback = "Debes ingresar dos imágenes"
            }

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
    
        errorValidacion.innerText = feedback
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