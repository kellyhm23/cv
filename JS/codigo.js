//Función que indica con un texto que el formulario fue enviado
document.getElementById('BotonEnviar').addEventListener('click',function(){
    document.getElementById('FormularioEnviado').innerHTML = "Formulario enviado con éxito"

});

//Función que valida que todos los campos tengan contenido para así habilitar el botón
function ValidarEntrada(formulario) {
    if (document.getElementById(formulario)) {
        let ElementosFormulario = document.getElementById(formulario);
        if (ElementosFormulario.Nombre.value != "" && ElementosFormulario.Email.value != ""  && ElementosFormulario.Mensaje.value != "" ) {
            ElementosFormulario.BotonEnviar.disabled = false;
        }
    }
}