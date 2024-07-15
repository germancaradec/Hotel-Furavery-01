   //realizamos validación de email con expresión regular
    function validarmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regex.test(email)
}

function validaHabitaciones(){
    //Habiendo pasado las validaciones del formulario

    //definimos variables de datos necesarias
    let checkin = new Date(document.getElementById("checkin").value)
    let checkout = new Date(document.getElementById("checkout").value)
    let fechaActual = new Date()
    
    let tipoHabitacion =  document.getElementById("tipoHabitacion").value
    let cantidadAdultos = document.getElementById("cantidadAdultos").value
    let cantidadMenores = document.getElementById("cantidadMenores").value
    let cantidadHabitaciones = document.getElementById("cantidadHabitaciones").value
    
    let email = document.getElementById("email").value
    

    //realizamos validación de formulario(fechas y mail correctos, y resto de los campos completados)
    
    
    if ( checkin <= fechaActual || checkout <= checkin || isNaN(checkout) || isNaN(checkin) ) {
        document.getElementById("solicitud").textContent = 
        `Verifique las fechas ingresadas`
        return false
    } else if (tipoHabitacion === "" ) {
        document.getElementById("solicitud").textContent = 
        `Debe seleccionar un tipo de habitación`
        return false
    } else if (cantidadAdultos <= "0" || cantidadMenores < "0" ) {
        document.getElementById("solicitud").textContent = 
        `Verifique las cantidades de huespedes ingresadas`
        return false
    } else if (cantidadHabitaciones <= "0" ) {
        document.getElementById("solicitud").textContent = 
        `La cantidad de habitaciones debe ser mayor a 0`
        return false
    } else if (validarmail(email) === false ){
        document.getElementById("solicitud").textContent = 
        `El email no es valido`
        return false
    } else {
        return true;
    }

}


    // Ingresar como administrador
    function ingresarAdministrador() {
        //definimos variables de datos necesarias
        const contraCorrecta = "admin2024"
        const usuario = document.getElementById("usuario").value
        const contraIngresada = document.getElementById("contrasena").value
        // const contraSs = localStorage.getItem("ContraseñaIngresada")
        // const seccionAdmin = document.getElementById("func-admin")
        
        //definimos y asignasmos valores a Usurario y Contrasseña en sS
        // localStorage.setItem("Usuario", usuario)
        // localStorage.setItem("ContraseñaIngresada", contraIngresada) 
        
        //llamamos a la funcion que agrega o remueve la clase del div, según si la contraseña coincide o no (pasandole los parametros que necesita)
        compararSs(contraCorrecta, contraIngresada)
    }

    function compararSs(contraCorrecta, contraIngresada) {
        // si la contraseña de sessionstorage es igual a la contraCorrecta, quitamos la clase con display none, sino la dejamos.
        
        if (contraCorrecta === contraIngresada )  {
            window.location.href = 'listadoCotizaciones.html';
        } 
    }
