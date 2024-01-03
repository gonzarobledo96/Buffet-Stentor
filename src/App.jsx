import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Prueba from './assets/components/prueba/prueba';
import Navbar from './assets/components/pagina-principal/Navbar';
import Cartelpy from './assets/components/cartel-pedidos-ya/cartelpy';
import MenuHorarios from './assets/components/Menu-y-horarios/MenuYhorarios';
import Eventos from './assets/components/eventos/eventos';
import Galeria from './assets/components/galeria/galeria';
import Promocion from './assets/components/promocion/promocion';
import Ubicacion from './assets/components/ubicacion/ubicacion';
import HorariosDeAtencion from './assets/components/horario-de-atencion/horarioAtencion';
import './assets/components/Style.css/style.css'; 

function App() {
  

  return (
   <div>
    {/* < Prueba />  */}
      < Navbar /> 
     < Cartelpy />
     <HorariosDeAtencion /> 
     < MenuHorarios />
     <Promocion />
     <Eventos />
     <Galeria /> 
     
     <Ubicacion />
     
   </div>
  )
}

export default App
