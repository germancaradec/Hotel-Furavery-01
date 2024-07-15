
//envío del formulario de reservas
function enviarFormulario() {
    //definimos variables de datos necesarias
    let checkin = new Date(document.getElementById("check-in").value)
    let checkout = new Date(document.getElementById("check-out").value)
    let fechaActual = new Date()

    let tipoHabitacion =  document.getElementById("tipoHabitacion").value
    let cantidadAdultos = document.getElementById("adultos").value
    let cantidadMenores = document.getElementById("menores").value
    let cantidadHabitaciones = document.getElementById("habitaciones").value
    
    let email = document.getElementById("email").value

    //realizamos validación de email con expresión regular
    function validarmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return regex.test(email)
    }

    //realizamos validación de formulario(fechas y mail correctos, y resto de los campos completados)


    if ( checkin <= fechaActual || checkout <= checkin || isNaN(checkout) || isNaN(checkin) ) {
        document.getElementById("solicitud").textContent = 
        `Verifique las fechas ingresadas`
    } else if (tipoHabitacion === "" ) {
        document.getElementById("solicitud").textContent = 
        `Debe seleccionar un tipo de habitación`
    } else if (cantidadAdultos <= "0" || cantidadMenores < "0" ) {
        document.getElementById("solicitud").textContent = 
        `Verifique las cantidades de huespedes ingresadas`
    } else if (cantidadHabitaciones <= "0" ) {
        document.getElementById("solicitud").textContent = 
        `La cantidad de habitaciones debe ser mayor a 0`
    } else if (validarmail(email) === false ){
        document.getElementById("solicitud").textContent = 
        `El email no es valido`
    } else {
        document.getElementById("solicitud").innerHTML = `
        Solicitud enviada correctamente.</br>
        El presupuesto llegará al e-mail proporcionado.`

        //guardamos en sessionStorage el mail    
        sessionStorage.setItem("mail", email)

    
        //creamos un objeto js con la reserva (para luego crear json de datos para backend)
        // function crearObjDesdeFormulario() {
            
        //     let objReserva = {
        //         "checkin": checkin , 
        //         "checkout": checkout , 
        //         "tipoHabitacion": tipoHabitacion,
        //         "cantidadAdultos": cantidadAdultos , 
        //         "cantidadMenores": cantidadMenores , 
        //         "cantidadHabitaciones": cantidadHabitaciones , 
        //         "emil": email
        //     } 
        //     console.log(objReserva)
        
        //     //pasamos de objeto .js a objeto JSON
        //     let reserva = JSON.stringify(objReserva)
        //     console.log(reserva)
        // }

        // //llamamos a la funcion crear objeto antes de limpiar valores del formulario
        // crearObjDesdeFormulario()

        //limpiamos los inputs del formulario
        document.getElementById("check-in").value = ""
        document.getElementById("check-out").value = ""
        document.getElementById("tipoHabitacion").value = ""
        document.getElementById("adultos").value = ""
        document.getElementById("menores").value = ""
        document.getElementById("habitaciones").value = ""
        document.getElementById("email").value = ""
    }
}
