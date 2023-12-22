
function Galeria() {
  const imagenes = [
    '/src/assets/components/img/unnamed.jpg',
    '/src/assets/components/img/unnamed2.jpg',
    '/src/assets/components/img/unnamed3.jpg',


    '/src/assets/components/img/pancho-clasico.webp',
    '/src/assets/components/img/hamburguesa-completa.webp',
    '/src/assets/components/img/milanesa-clasica.webp',
    '/src/assets/components/img/pizza-huevo.webp',
    '/src/assets/components/img/porcion-fritas-huevo.webp',
    '/src/assets/components/img/pancho-clasico.webp',
  ];

  return (
<div id="Galeria">
    <div className=" text-center">
        <h1>Galeria</h1>
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
