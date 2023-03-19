let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
// La parte de arriba está cogiendo la parte del icono y los enlaces y abajo, que al hacer click haga una funcion, a la que le damos la letra de a
// Con el método .addEventListener() permite añadir una escucha del evento indicado (primer parámetro),
// y en el caso de que ocurra, se ejecutará la función asociada indicada (segundo parámetro).
boton.addEventListener("click", function(a){
    //preventDefault() previene el comportamiento por defecto que trae consigo el evento
    // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
    a.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces dos")
        contador=1;
    }
    // El else indica que cuando se le vuelva a dar al menu, la clase dos hace "remove" lo que vuelve a su estado original el desplegable
    else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
    }
})

