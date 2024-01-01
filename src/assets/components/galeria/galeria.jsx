
import ImagenGaleriaUno from '../img/unnamed.jpg';
import ImagenGaleriaDos from '../img/unnamed2.jpg';
import ImagenGaleriaTres from '../img/unnamed3.jpg';
import ImagenGaleriaCuatro from '../img/unnamed4.jpg';

function Galeria() {
  // const imagenes = [
  //   '../img/unnamed.jpg',
  //   '../img/unnamed2.jpg',
  //   '../img/unnamed3.jpg',
  //   '../img/unnamed4.jpg',
  // ];

  const imagenes = [
    ImagenGaleriaUno,
    ImagenGaleriaDos,
    ImagenGaleriaTres,
    ImagenGaleriaCuatro,
  ];

  return (
    <div id="Galeria" className="galeria">
      <div className=" text-center">
        {/* <h1>GALERIA</h1> */}
      </div>
      <div className="galeria-container">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index + 1}`}
            className="galeria-imagen"
          />
        ))}
      </div>
    </div>
  );
}

export default Galeria;