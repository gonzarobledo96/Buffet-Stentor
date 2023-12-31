// import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useEffect, useState } from 'react';
import { useState } from 'react';

const PruebaNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };




  return (
    <div className={`inicio ${isActive ? 'is-active' : ''}`} id="inicio">
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg fondo-del-nav">
        
          <div className="container-fluid">
          <img src="/src/assets/components/img/letras - copia.png" alt="" />
            <div
              className="navbar-toggler hamburger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleToggleClick}
            >
              <div className="hamburger__container justify-content-center">
                <div className="hamburger__inner"></div>
                <div className="hamburger__hidden"></div>
              </div>
            </div>




            <div
              className="collapse navbar-collapse posicion-nav"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">

              <li className="nav-item">
                <div id="logoresponsive">                 
                <figure>
                  <a href="#"><img src="/src/assets/components/img/descarga_preview_rev_1 (1).png" alt="inicio"></img></a>
                </figure>
              </div>
                <a
                  className="nav-link diseño-texto-navbar"
                  href="#trayectoria"
                  rel="noopener noreferrer"
                  style={{ color: 'white' }}>
                    PEDIDOS YA</a>
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

      {/* <div className="contenido">
        <div className="presentacion">
          <div className="linea-presentacion">_______________________</div>
          <p className="bienvenida">Bienvenidos</p>
          <h2 className="Transporte-Raul">TRANSPORTE RAUL</h2>
          <p className="descripcion">EMPRESA ESCOLAR</p>
          <div className="linea-presentacion2">_______________________</div>
          <a href="https://api.whatsapp.com/send?phone=26428286&text=Hola%20sean%20vienvenidos!">
            <i className="fa-brands fa-whatsapp"></i> PREGUNTAR PRESUPUESTO{" "}
          </a>
        </div>
      </div> */}
    </div>
  );
};
    
  


export default PruebaNavbar;
