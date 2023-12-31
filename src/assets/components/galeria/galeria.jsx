
function Galeria() {
  const imagenes = [
    '/src/assets/components/img/unnamed.jpg',
    '/src/assets/components/img/unnamed4.jpg',
    '/src/assets/components/img/unnamed2.jpg',
    '/src/assets/components/img/unnamed3.jpg',
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
