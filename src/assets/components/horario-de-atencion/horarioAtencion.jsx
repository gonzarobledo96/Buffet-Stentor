// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';




function HorariosDeAtencion() {


  
  return (
    <div>
        <div id="nuestrosHorarios" className="horarios-container">
      <div className=" text-center">
        <h1>HORARIOS DE ATENCION</h1>
      </div>


      <div className="horarios-infoo">
        <div className="horario-item">
          <h2>BUFFET</h2>
          {/* <FontAwesomeIcon icon={faClock} /> */}
          <p>
            <strong>Lunes a Domingo:</strong> 10:00 AM - 12:00 PM
          </p>
        </div>
        <div className="horario-item">
          <h2>PEDIDOS YA</h2>
          {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
          <p className="text-center">10:00 AM - 12:00 PM</p>
        </div>
      </div>
    





      {/* <div className="horarios-info">
      <FontAwesomeIcon icon={faClock} />
        <p><strong>Lunes a Sabado:</strong> 10:00 AM - 12:00 PM - <strong>Domingo:</strong> 5:00 PM - 12:00 PM</p>
        <FontAwesomeIcon icon={ faCalendarAlt} />
         <p><strong>Sábado:</strong> 11:00 AM - 6:00 PM</p>
        <p></p>
      </div> */}
      
    </div>
    {/* <footer>
<p>&copy; 2024 Buffet del Club Atlético Stentor. Todos los derechos reservados.</p>
</footer> */}
    </div>
  );
}

export default HorariosDeAtencion;
