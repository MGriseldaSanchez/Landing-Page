/* validacion de formulario con jQuery */

// evita el envio del form
// jQuery.validator.setDefaults({
//   debug: true,
//   success: "valid",
// });

$(document).ready(function () {
  // metodo validate de jquery
  $("#contact").validate({
    //reglas:
    rules: {
      nombre: {
        required: true,
        minlength: 3,
      },
      apellido: {
        required: true,
        minlength: 3,
      },
      edad: {
        required: true,
        number: true,
        min: 18,
      },

      email: {
        required: true,
        email: true,
      },

      genero: {
        required: true,
      },

      //arreglado
      plan: {
        required: true,
      },

      mensaje: {
        minlength: 20,
      },
    },
    //mensajes personalizados
    messages: {
      nombre: {
        required: `Campo obligatorio`,
        minlength: `El nombre debe ser mayor a 3 caracteres`,
      },
      apellido: {
        required: `Campo obligatorio`,
        minlength: `El apellido debe ser mayor a 3 caracteres`,
      },
      edad: {
        required: `Campo obligatorio`,
        number: `Ingrese un valor numerico`,
        min: `Debe ser mayor de 18 años`,
      },
      email: {
        required: `Campo obligatorio`,
        email: `Debe tener un formato abc@domain.tld`,
      },

      genero: {
        required: ` Seleccione uno`,
      },
      plan: {
        required: `Seleccione uno`,
      },

      mensaje: {
        required: `Campo obligatorio`,
        minlength: `Debe tener un minimo de 20 caracteres`,
      },
    },
    // se crea un elemento span donde se muestra el msj de error
    errorElement: "span",
    //hace foco en el campo invalido
    focusInvalid: true,
    //funcion de jquery validation que se ejecuta cuando se envia el form
    submitHandler: function(form) {
      // Aquí puedes agregar tu código para enviar el formulario
      alert("Formulario enviado con exito")
    }
  });
});



/* funcion jquery que permite la seleccion solo de un check */
$(document).ready(function () {
  $(".form-check-input").click(function () {
    //cuando se selecciona un check ,prop("checked,false") deselecciona los demas
    $(".form-check-input").not(this).prop("checked", false);
  });
});

/*prueba de funcion  */

