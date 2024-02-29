// eventos de los imputs y el texarea
const datos = {
    nombre : "",
    email : "",
    mensaje : ""
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

// el evento de submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    // validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre ==='' || email ==='' || mensaje === ''){
        alerta("Todos los campos deben llenarse",true)
       
        return; //corta la ejecucion del codigo
    }
    alerta("Mensaje enviado correctamente")
});

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
    // datos[nombre] = evento.tarjet.lo_que_se_escribe_enEl_input
    // console.log(datos); 
}

// mostrar alerta de enviado o error
function alerta(mensaje, error = null){
    const parrafoAlerta = document.createElement('P');
    parrafoAlerta.textContent = mensaje;

    if(error){
        parrafoAlerta.classList.add('parrafoError');
    }else{
        parrafoAlerta.classList.add('parrafoEnviado')
    }
    formulario.appendChild(parrafoAlerta)
    setTimeout(function(){
        parrafoAlerta.remove();
    }, 5000)  
}
