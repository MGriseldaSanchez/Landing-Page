/* validacion de formulario con jQuery */


// evita el envio del form
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

$(document).ready(function() {
     // metodo validate de jquery
    $("#contact").validate({
        //reglas:
        rules:{
            nombre:{
                required:true,
                minlength: 3
            },
            apellido:{
                required:true,
                minlength: 3
            },
            edad:{
                required: true,
                number: true,
                min: 18
            },

            email:{
                required: true,
                email:true
            },
            //? plan no muestra el mensaje
            plan:{
                required:true
            },

            mensaje:{
                required:true,
                minlength: 30
            }
        },
        //mensajes personalizados
        messages:{
            nombre:{
                required: `Campo obligatorio`,
                minlength: `El nombre debe ser mayor a 3 caracteres`
            },
            apellido:{
                required: `Campo obligatorio`,
                minlength: `El apellido debe ser mayor a 3 caracteres`
            },
            edad:{
                required: `Campo obligatorio`,
                number: `Ingrese un valor numerico`,
                min: `Debe ser mayor de 18 años`
            },
            email:{
                required: `Campo obligatorio`,
                email: `Debe tener un formato abc@domain.tld`
            },
            plan:{
                required: `Seleccione uno`
            },

            mensaje:{
                required:`Campo obligatorio`,
                minlength: `Debe tener un minimo de 30 caracteres`
            }















        }















    });
  
















});