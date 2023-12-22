import Countdown from 'react-countdown';


function Promocion() {


 // Define la fecha de finalización de la promoción
 const fechaFinalizacion = new Date('2023-12-31T23:59:59');



 
  return (
<div className='promociones mb-5' id="promociones">
{/* Promocion */}
    <div className="promociones-container">
    {/* <img className=' w-100' src="/src/assets/components/img/promocion-slide-malibu-bar-en-cali.jpg" alt="" /> */}
      <div className="contador-regresivo">
        <Countdown
  date={fechaFinalizacion}
  renderer={({ days, hours, minutes, seconds, completed }) => (
    <div className="contador-regresivo">
      <h3>¡Oferta Especial!</h3>
      <p>¡Aprovecha nuestra promoción antes de que termine!</p>
      {completed ? (
        <span>La promoción ha finalizado</span>
      ) : (
        <span className="tiempo-restante">
          Tiempo restante: {days}d {hours}h {minutes}m {seconds}s
        </span>
      )}
    </div>
  )}
/>
      </div>
    </div>



</div>
  );
}

export default Promocion;
