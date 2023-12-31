
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { useState,useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import LogoStentor from '../img/LogoStentor.png';
// import PuertaStentor from '../img/puerta-de-stentor - copia.jpeg';
 import logoprueba from '../img/1_preview_rev_1 - copia.png';
import PuertaStentor2 from '../img/puerta-de-stentor - copia - copia.jpeg';
// import BuffetStentorLetras from '../img/BuffetStentorLetras.jpg';



// export default NavbarComponent;
const PaginaPrincipal = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Ajusta el valor según cuándo quieres que aparezca el fondo
      const scrollThreshold = 50;

      if (scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



    return (
      <div className={`inicio ${isScrolled ? 'scrolled' : ''}`} id="inicio">
        {/* fondo del navbar */}
      <div className="fixed-top">
      <nav className="navbar navbar-expand-lg fondo-del-nav">  
        <div className="container-fluid">
        {/* <img src={BuffetStentorLetras} alt="BuffetStentorLetras" /> */}
        <img src={logoprueba} alt="BuffetStentorLetras" />
        <div className="navbar-toggler hamburger" 
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
  onClick={handleToggleClick}
>
  <div className="hamburger__container">
    <div className="hamburger__inner">
      {/* Utiliza el ícono de hamburguesa o cruz según el estado del menú */}
      <FontAwesomeIcon icon={isActive ? faTimes : faBars} />
    </div>
    <div className="hamburger__hidden"></div>
  </div>
</div>
          <div
          className="collapse navbar-collapse "
            /* posicion-nav */
            id="navbarSupportedContent"
          >
            <ul className=" navbar-nav ">
            <li className="nav-item espacio-logo-navbar">
               {/* <div id="logoresponsive">                 
              <figure>
                <a href="#">
                <img src={LogoStentor} alt="Descripción" />
                </a>
              </figure>
            </div>
              <a
                className="nav-link "
                href="#trayectoria"
                rel="noopener noreferrer"
                style={{ color: 'white' }}>
                  PEDIDOS YA</a>  */}
                   {/* <a className="nav-link diseño-texto-navbar" href="#" rel="noopener noreferrer">
                INICIO
                </a>  */}
              </li>

              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#inicio" rel="noopener noreferrer">
                INICIO
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#pedidosYa" rel="noopener noreferrer">
                PEDIDOS YA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#MenuYhorarios" rel="noopener noreferrer">
                MENU Y PRECIOS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#promociones" rel="noopener noreferrer">
                  PROMOCIONES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#eventos" rel="noopener noreferrer">
                EVENTOS
                </a>
              </li>                         
              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#Galeria" rel="noopener noreferrer">
                  GALERIA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link diseño-texto-navbar" href="#ubicacion" rel="noopener noreferrer">
                UBICACION
                </a>
              </li>                     
            </ul>
          </div>
        </div>
      </nav>
      </div>

       {/* <div className="contenido bg-black">
        <div className="presentacion">
          <div className="linea-presentacion">_______________________</div>
          <p className="bienvenida">Bienvenidos</p>
          <h2 className="Transporte-Raul">BUFFET STENTOR</h2>
          
          <div className="linea-presentacion2">_______________________</div>
          <a href="https://api.whatsapp.com/send?phone=26428286&text=Hola%20sean%20bienvenidos!">
            <i className="fa-brands fa-whatsapp"></i> PREGUNTAR PRESUPUESTO
          </a>
        </div>
      </div>  */}

      
      <div id="carouselExampleControls" className="carousel slide fondo-principal" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption ">
        <p className="bienvenida">Bienvenidos</p>
        <h2 className="BuffetStentor">BUFFET STENTOR</h2>
        {/* <a href="https://api.whatsapp.com/send?phone=26428286&text=Hola%20sean%20bienvenidos!">
          <i className="fa-brands fa-whatsapp PreguntarPresupuesto"></i> PREGUNTAR PRESUPUESTO
        </a> */}
      </div>
      {/* <img src={PuertaStentor} className="d-block w-100" alt="..." /> */}
      <img src={PuertaStentor2} className="d-block w-100" alt="..." />
    </div>
    {/* Otras imágenes del carrusel aquí */}
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>



{/* Logo de whatsapp y instagram */}
<div className="whatsapp-container">
      <a  href="https://api.whatsapp.com/send?phone=69115723&text=Hola%20sean%20Bienvenidos!" target="_blank" className="whatsapp-link" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp}  />
      </a>
      <a href="enlace-de-instagram" target="_blank" className="whatsapp-link-ig">
        <FontAwesomeIcon icon={faInstagram}  />
      </a>
      <a  href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" className="whatsapp-link-py" rel="noreferrer">
        <p>PY</p>
      </a>
    </div>
    </div>
    );
  };
export default  PaginaPrincipal;