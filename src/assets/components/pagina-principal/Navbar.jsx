// import { Navbar, Nav, Container } from 'react-bootstrap';

// const NavbarComponent = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Mi App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#pagina-principal">Página Principal</Nav.Link>
//             <Nav.Link href="#pagina-dos">Página Dos</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// export default NavbarComponent;
const PaginaPrincipal = () => {
    return (
      <nav className="inicio" id="inicio">
        {/* fondo del navbar */}
        <section id="barramenu">
    </section>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg fondo-del-nav">
          <div className="container-fluid">
            <div
              className="navbar-toggler hamburger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger__container justify-content-center">
                <div className="hamburger__inner"></div>
                <div className="hamburger__hidden"></div>
              </div>
            </div>



            <div  className="nav-item letras">
                  {/* <img src="/src/assets/components/img/letras.png" alt="" /> */}
                  <img src="/src/assets/components/img/letras - copia.png" alt="" />
                </div>




            <div className="collapse navbar-collapse posicion-nav" id="navbarSupportedContent">
              <ul className="navbar-nav">

              <li className="nav-item">
                <div id="logoresponsive">
                  {/* logo de navbar */}
			<figure>
				<a href="#"><img src="/src/assets/components/img/descarga_preview_rev_1 (1).png" alt="inicio"></img></a>
			</figure>
		</div>
                <a
                  className="nav-link diseño-texto-navbar"
                  href="#trayectoria"
                  rel="noopener noreferrer"
                  style={{ color: 'white' }}>
                    ----------</a>
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
                
               
                 {/* <li className="nav-item">
                  <a className="nav-link diseño-texto-navbar" href="#nuestrosHorarios" rel="noopener noreferrer">
                  HORARIOS DEL BUFFET
                  </a>
                </li>  */}
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
          <a href="https://api.whatsapp.com/send?phone=26428286&text=Hola%20sean%20bienvenidos!">
            <i className="fa-brands fa-whatsapp"></i> PREGUNTAR PRESUPUESTO
          </a>
        </div>
      </div> */}

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/src/assets/components/img/puerta-de-stentor - copia.jpeg" className="d-block w-100" alt="..."></img>
    </div>

     {/* <div className="carousel-item">
      <img src="/src/assets/components/img/4.jpg" className="d-block w-100" alt="..."></img>
    </div>

    <div className="carousel-item">
      <img src="/src/assets/components/img/3.jpeg" className="d-block w-100" alt="..."></img>
    </div> 
     */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/* <div className='fondo-delivery-de-py'>
  <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><img src="/src/assets/components/img/aaa - copia (2).jpg" alt="" /></a>
</div> */}




{/* Logo de whatsapp y instagram */}
<div className="footer-container">
  
      <a  href="https://api.whatsapp.com/send?phone=69115723&text=Hola%20sean%20Bienvenidos!" target="_blank" className="footer-link" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp}  />
      </a>
      <a href="enlace-de-instagram" target="_blank" className="footer-link-ig">
        <FontAwesomeIcon icon={faInstagram}  />
      </a>

      <a  href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" className="footer-link-py" rel="noreferrer">
        <p>PY</p>
      </a>
    </div>
    </nav>
    );
  };
  

export default  PaginaPrincipal;
