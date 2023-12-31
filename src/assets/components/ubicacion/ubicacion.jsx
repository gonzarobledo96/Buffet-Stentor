function Ubicacion() {
  

    return (
        <div id="ubicacion" >
         <div className="fondo-ubicacion">
         {/* <h1 className="text-center text-black "><b>UBICACION</b></h1> */}
        {/* <h3 className="text-black text-center p-2 texto-fondo-contactar tamaño-2-media-cuire">Para consultas y/o presupuestos, ingrese los datos a continuación, un asesor se estará comunicando a la brevedad.</h3> */}
        <div className="row row-cols-12 mapa-ubicacion">{/* row-cols-md-2  */}
            <iframe
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13131.167231824098!2d-58.5046214!3d-34.6347011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9f09395ab53%3A0xcb7f097df89cf413!2sClub%20Atl%C3%A9tico%20Stentor!5e0!3m2!1ses!2sar!4v1701753177619!5m2!1ses!2sar"
                width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
            </div>
            <footer>
<p>&copy; 2024 Buffet del Club Atlético Stentor. Todos los derechos reservados.</p>
</footer>
    </div>
    );
  }
  
  export default Ubicacion;
  