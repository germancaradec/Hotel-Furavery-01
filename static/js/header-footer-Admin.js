

//armamos bloque footer
let footer =`
<a href="#header"><img src="static/imagenes/logo-negro-furaveri.png" alt="Logo Hotel" class="logo-footer"></a>
<section class="social">
    <a href="https://www.facebook.com/" target="_blank"><img src="static/imagenes/facebook.png" alt="Facebook"></a>
    <a href="https://www.instagram.com/" target="_blank"><img src="static/imagenes/instagram.png" alt="Instagram"></a>
    <a href="https://www.twitter.com" target="_blank"><img src="static/imagenes/twitter.png" alt="Twitter"></a>
    <a href="https://www.whatsapp.com/" target="_blank"><img src="static/imagenes/whatsapp.png" alt="Watsapp"></a>
</section>
`;
document.getElementById("footer").innerHTML = footer



//armamos bloque menuAdmin
let menuAdmin =`
         <nav id="func-admin" class="funcAdminInactivo">
                <a href="listadoCotizaciones.html"> 
                    <button class="boton-header">LISTAR COTIZACIONES</button>
                </a>
                <a href="modificacionesCotizaciones.html"> 
                    <button class="boton-header">MODIFICAR COTIZACIÓN</button>
                </a>
                <a href="listadoEliminarCotizaciones.html"> 
                    <button class="boton-header">ELIMINAR COTIZACIÓN</button>
                </a>
            </nav>
            <nav id="func-admin" class="funcAdminInactivo">
                <a href="listadoConsultas.html"> 
                    <button class="boton-header">LISTAR CONSULTAS</button>
                </a>
                <a href="modificaciones.Consultas.html"> 
                    <button class="boton-header">MODIFICAR CONSULTAS</button>
                </a>
                <a href="listadoEliminarConsultas.html"> 
                    <button class="boton-header">ELIMINAR CONSULTAS</button>
                </a>
            </nav>
`;
document.getElementById("menuAdmin").innerHTML = menuAdmin

