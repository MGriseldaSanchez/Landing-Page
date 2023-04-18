/* validacion de formulario con jQuery */

// evita el envio del form
jQuery.validator.setDefaults({
  debug: true,
  success: "valid",
});

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

      genero:{
        required: true,

      },

    //arreglado
      plan: {
        required: true,
      },

      mensaje: {
        minlength: 30,
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

      genero:{

        required: ` `
      },
      plan: {
        required: `Seleccione uno`,
      },

      mensaje: {
        required: `Campo obligatorio`,
        minlength: `Debe tener un minimo de 30 caracteres`,
      },
    },
    // se crea un elemento span donde se muestra el msj de error
    errorElement : 'span'
  });
});



/* enfoca sobre el campo invalido al enviar el formulario */

// cuando se hace clic en el botón de enviar el formulario
$(".btn btn-danger").click(function () {
  // si el formulario no es válido
  if (!$("#contact").valid()) {
    // busca el primer campo que no haya sido validado
    var primerCampoInvalido = $("#contact").find(":input.error:first");
    // enfoca en el primer campo inválido
    primerCampoInvalido.focus();
    primerCampoInvalido.val("");
  }
});

/* funcion jquery que permite la seleccion solo de un check */
$(document).ready(function () {

  $(".form-check-input").click(function () {
    //cuando se selecciona un check ,prop("checked,false") deselecciona los demas
    $(".form-check-input").not(this).prop("checked", false);
  });
});
