import Countdown from 'react-countdown';
import ImagenGaleriaCuatro from '../img/fondo-promociones.png';
function Promocion() {


 // Define la fecha de finalización de la promoción
 const fechaFinalizacion = new Date('2024-01-07T23:59:59');



 
  return (
<div className='promociones mb-5' id="promociones">
<img className=' w-100' src={ImagenGaleriaCuatro} alt="" />
{/* Promocion */}
    <div className="promociones-container">
    {/* <img className=' w-100' src="/src/assets/components/img/promocion-slide-malibu-bar-en-cali.jpg" alt="" /> */}
      <div className="contador-regresivo">
        <Countdown
  date={fechaFinalizacion}
  renderer={({ days, hours, minutes, seconds, completed }) => (
    <div className="contador-regresivo">
      {/* <h3>¡Oferta Especial!</h3> */}
      <p>¡Aprovecha nuestra promoción antes de que termine!</p>
      {completed ? (
        <span>La promoción ha finalizado</span>
      ) : (
        <span className="tiempo-restante">
          Tiempo restante: {days}d {hours}h {minutes}m {seconds}s
        </span>
      )}
      <p><a className="boton-whatsapp " href="https://api.whatsapp.com/send?phone=69115723&text=Hola%20sean%20Bienvenidos!" target="_blank" rel="noreferrer">Contactar por WhatsApp</a></p>
    </div>
  )}
/>
      </div>
    </div>



</div>
  );
}

export default Promocion;
