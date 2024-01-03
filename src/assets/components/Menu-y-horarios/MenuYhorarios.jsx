import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faPizzaSlice, faHotdog, faWineBottle,  faBreadSlice, faBacon, faCloud, faCoins} from '@fortawesome/free-solid-svg-icons';

import ImagenPizzaMuzza from '../img/pizza-muzzarella - copia.jpeg';
import ImagenPizzaJamon from '../img/pizza-jamon - copia.jpeg';
import ImagenPizzaNapo from '../img/pizza-stentor - copia.jpeg';
import ImagenPizzaHuevo from '../img/pizza-huevo.webp';
import ImagenPizzaStentor from '../img/pizza-stentor - copia.jpeg';
import ImagenHamburguesaUno from '../img/hamburguesa-huevo - copia.jpeg';
import ImagenHamburguesaDos from '../img/hamburguesa-completa.webp';
import ImagenMilanesaClasica from '../img/milanesa-clasica.webp';
import ImagenMilanesaNapolitana from '../img/Milanesa-napolitana.webp';
import ImagenMilanesaCaballo from '../img/Milanesa-a-caballo.webp';
import ImagenEmpanadaJyQ from '../img/empanadas-de-j-q - copia.jpeg';
import ImagenEmpanadaPollo from '../img/empanadas-de-carne - copia.jpeg';
import ImagenMelialunaJyQ from '../img/medialunas-jamon-queso.jpeg';
import ImagenPanchos from '../img/pancho-clasico.webp';
import ImagenTostadas from '../img/Tostado-pan-Arabe.webp';

// Componente reutilizable para cada pizza
function MenuSection() {
  const [selectedMenu, setSelectedMenu] = useState('Pizzas');
  const [mensajes, setMensajes] = useState({
    pizzaMusarela: null,
    pizzaJamon: null,
    pizzaNapolitana: null,
    pizzaHuevo: null,
    pizzaStentor: null,
    HamburguesaClasica: null,
    HamburguesaCompleta: null,
    MilanesaClasica: null,
    MilanesaNapolitana: null,
    MilanesaCaballo: null,
    Empanadasjq: null,
    EmpanadasPollo: null,
    EmpanadasCarne: null,
    MedialunaManteca: null,
    MedialunaJamonQueso: null,
    Pancho: null,
    tostadoArabe: null,
    tostadoArabeCompleto: null,
    BebidaAquariusPera: null,
    // ... otros elementos de menú
  });

  const handleMenuItemClick = (menuOption) => {
  setSelectedMenu(menuOption);
  setMensajes((prevMensajes) => ({
    ...prevMensajes,
    [menuOption]: null,
  }));
  };
// Este codigo mantiene el color del menu en la opcion seleccionada para que el cliente sepa en el menu que esta
document.querySelectorAll('.menu button').forEach((button) => {
  button.classList.remove('selected');
});

  const [votos, setVotos] = useState({
    pizzaMusarela: null,
    pizzaJamon: null,
    pizzaNapolitana: null,
    pizzaHuevo: null,
    pizzaStentor: null,
    HamburguesaClasica: null,
    HamburguesaCompleta: null,
    MilanesaClasica: null,
    MilanesaNapolitana: null,
    MilanesaCaballo: null,
    Empanadasjq: null,
    EmpanadasPollo: null,
    EmpanadasCarne: null,
    MedialunaManteca: null,
    MedialunaJamonQueso: null,
    Pancho: null,
    tostadoArabe: null,
    tostadoArabeCompleto: null,
    BebidaAquariusPera: null,
    // ... otros elementos de menú
  });

  const handleVoto = (valor, menuItem) => {
    setVotos((prevVotos) => ({
      ...prevVotos,
      [menuItem]: valor,
    }));
    setMensajes((prevMensajes) => ({
      ...prevMensajes,
      [menuItem]: '¡Gracias por votar! 👍',
    }));
    setTimeout(() => {
      setMensajes((prevMensajes) => ({
        ...prevMensajes,
        [menuItem]: null,
      }));
    }, 2000);
  };

  const handleStarHover = (valor, menuItem) => {
    const estrellas = document.querySelectorAll(`.${menuItem} .star`);
    estrellas.forEach((estrella, index) => {
      if (index < valor) {
        estrella.classList.add('hovered');
      } else {
        estrella.classList.remove('hovered');
      }
    });
  };
  
  const handleStarLeave = (menuItem) => {
    const estrellas = document.querySelectorAll(`.${menuItem} .star`);
    estrellas.forEach((estrella) => {
      estrella.classList.remove('hovered');
    });
  };
  
  const handleStarClick = (valor, menuItem) => {
    handleVoto(valor, menuItem);
    handleStarLeave(menuItem);
  };
  
  let content = null;
  switch (selectedMenu) {
    case 'Pizzas':
      content = (
        <div className="fondoDeLosPrecios">
          <div className="menu-container">
<div className="menu-item pizzaMusarela" >
 <img src={ImagenPizzaMuzza} alt="Descripción" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.pizzaMusarela >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'pizzaMusarela')}
        onMouseOut={() => handleStarLeave('pizzaMusarela')}
        onClick={() => handleStarClick(valor, 'pizzaMusarela')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.pizzaMusarela || '5'}</p>
  </div>
  {mensajes.pizzaMusarela && <div className="mensaje-temporal">{mensajes.pizzaMusarela}</div>}
  <div >
    <h3>Pizza Muzza</h3>
     <p className='condimentos'>Queso, orégano, aceitunas, provenzal<strong className=' text-white'>Provenzal</strong></p> 
    <p className="price">$3.600</p>
    <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
<div className='menu-item pizzaJamon'>
  <img src={ImagenPizzaJamon} alt="Descripción" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.pizzaJamon >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'pizzaJamon')}
        onMouseOut={() => handleStarLeave('pizzaJamon')}
        onClick={() => handleStarClick(valor, 'pizzaJamon')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.pizzaJamon || '5'}</p>
  </div>
  {mensajes.pizzaJamon && <div className="mensaje-temporal">{mensajes.pizzaJamon}</div>}
  <div>
    <h3>Pizza Jamon</h3>
    <p className='condimentos'>Queso, jamon, orégano, aceitunas, provenzal </p>
    <p className="price">$3.600</p>
    <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>

<div className='menu-item pizzaNapolitana'>
<img src={ImagenPizzaNapo} alt="Descripción" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.pizzaNapolitana >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'pizzaNapolitana')}
        onMouseOut={() => handleStarLeave('pizzaNapolitana')}
        onClick={() => handleStarClick(valor, 'pizzaNapolitana')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.pizzaNapolitana || '5'}</p>
  </div>
  {mensajes.pizzaNapolitana && <div className="mensaje-temporal">{mensajes.pizzaNapolitana}</div>}
  <div>
  <h3>Pizza Napo</h3>
      <p className='condimentos'>Queso, tomate, orégano, aceitunas, provenzal</p>
      <p className="price">$4.400</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>


<div className='menu-item pizzaHuevo'>
<img src={ImagenPizzaHuevo} alt="Descripción" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.pizzaHuevo >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'pizzaHuevo')}
        onMouseOut={() => handleStarLeave('pizzaHuevo')}
        onClick={() => handleStarClick(valor, 'pizzaHuevo')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.pizzaHuevo || '5'}</p>
  </div>
  {mensajes.pizzaHuevo && <div className="mensaje-temporal">{mensajes.pizzaHuevo}</div>}
  <div>
  <h3>Pizza huevo</h3>
      <p className='condimentos'>Queso, huevo, aceitunas, orégano<strong className=' text-white'>Provenzal</strong></p>
      <p className="price">$4.600</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
<div className='menu-item pizzaStentor'>
<img src={ImagenPizzaStentor } alt="Descripción" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.pizzaStentor >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'pizzaStentor')}
        onMouseOut={() => handleStarLeave('pizzaStentor')}
        onClick={() => handleStarClick(valor, 'pizzaStentor')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.pizzaStentor || '5'}</p>
  </div>
  {mensajes.pizzaStentor && <div className="mensaje-temporal">{mensajes.pizzaStentor}</div>}
  <div>
      <h3>Pizza Stentor</h3>
      <p className='condimentos'>Queso, huevo frito, papas fritas, orégano, provenzal</p>
      <p className="price">$4.600</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
    </div>
</div>
</div>
     </div>
      );
      break;
    case 'Hamburguesas':
      content = (
        <div className="fondoDeLosPrecios">
              <div className="menu-container">
  <div className='menu-item HamburguesaClasica'>
  <img src={ImagenHamburguesaUno} alt="Hamburguesa" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.HamburguesaClasica >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'HamburguesaClasica')}
        onMouseOut={() => handleStarLeave('HamburguesaClasica')}
        onClick={() => handleStarClick(valor, 'HamburguesaClasica')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.HamburguesaClasica || '5'}</p>
  </div>
  {mensajes.HamburguesaClasica && <div className="mensaje-temporal">{mensajes.HamburguesaClasica}</div>}
  <div>
  <h3 className=' align-items-center '>Hamburguesa sola con papas fritas</h3>
      {/* <p>Queso, tomate, orégano, aceitunas, provenzal.</p> */}
      <p className="price">$4.400</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
<div className='menu-item HamburguesaCompleta'>
  <img src={ImagenHamburguesaDos} alt="Hamburguesa" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.HamburguesaCompleta >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'HamburguesaCompleta')}
        onMouseOut={() => handleStarLeave('HamburguesaCompleta')}
        onClick={() => handleStarClick(valor, 'HamburguesaCompleta')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.HamburguesaCompleta || '5'}</p>
  </div>
  {mensajes.HamburguesaCompleta && <div className="mensaje-temporal">{mensajes.HamburguesaCompleta}</div>}
  <div>
  <h3>Hamburguesa completa con papas fritas</h3>
      {/* <p>Queso, tomate, orégano, aceitunas, provenzal.</p> */}
      <p className="price">$4.400</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
</div>
  </div>
      );
      break;
      case 'Milanesas':
        content = (
          <div className="fondoDeLosPrecios">
         <div className="menu-container">
  <div className='menu-item MilanesaClasica'>
  <img src={ImagenMilanesaClasica} alt="Milanesas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.MilanesaClasica >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'MilanesaClasica')}
        onMouseOut={() => handleStarLeave('MilanesaClasica')}
        onClick={() => handleStarClick(valor, 'MilanesaClasica')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.MilanesaClasica || '5'}</p>
  </div>
  {mensajes.MilanesaClasica && <div className="mensaje-temporal">{mensajes.MilanesaClasica}</div>}
  <div>
  <h3 className=' align-items-center'>Milanesa clasica</h3>
  <p className='condimentos'>Papas sola con papas fritas</p>
      <p className="price">$4.400</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>

  <div className='menu-item MilanesaNapolitana'>
  <img src={ImagenMilanesaNapolitana} alt="Milanesas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.MilanesaNapolitana >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'MilanesaNapolitana')}
        onMouseOut={() => handleStarLeave('MilanesaNapolitana')}
        onClick={() => handleStarClick(valor, 'MilanesaNapolitana')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.MilanesaNapolitana || '5'}</p>
  </div>
  {mensajes.MilanesaNapolitana && <div className="mensaje-temporal">{mensajes.MilanesaNapolitana}</div>}
  <div>
  <h3 className=' align-items-center'>Milanesa Napolitana</h3>
  <p>Musarela, jamon y tomate</p> 
  <p className="price">$4.000</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>

  <div className='menu-item MilanesaCaballo'>
  <img src={ImagenMilanesaCaballo} alt="Milanesas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.MilanesaCaballo >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'MilanesaCaballo')}
        onMouseOut={() => handleStarLeave('MilanesaCaballo')}
        onClick={() => handleStarClick(valor, 'MilanesaCaballo')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.MilanesaCaballo || '5'}</p>
  </div>
  {mensajes.MilanesaCaballo && <div className="mensaje-temporal">{mensajes.MilanesaCaballo}</div>}
  <div>
  <h3 className=' align-items-center'>Milanesa a caballo</h3>
  <p className='condimentos'>Milanesa con huevo frito </p> 
  <p className="price">$4.400</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
</div>
    </div>
        );
        break;
        case 'Empanadas':
          content = (
            <div className="fondoDeLosPrecios">
        <div className="menu-container">
  <div className='menu-item Empanadasjq'>
  <img src={ImagenEmpanadaJyQ} alt="Empanadas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.Empanadasjq >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'Empanadasjq')}
        onMouseOut={() => handleStarLeave('Empanadasjq')}
        onClick={() => handleStarClick(valor, 'Empanadasjq')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.Empanadasjq || '5'}</p>
  </div>
  {mensajes.Empanadasjq && <div className="mensaje-temporal">{mensajes.Empanadasjq}</div>}
  <div>
  <h3 className=' align-items-center'>Empanadas de jamon y queso</h3>
  <p className="price">$3.600</p>
  {/* <p>Musarela, jamon y tomate</p>  */}
  
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
  <div className='menu-item EmpanadasPollo'>
  <img src={ImagenEmpanadaPollo} alt="empanadas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.EmpanadasPollo >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'EmpanadasPollo')}
        onMouseOut={() => handleStarLeave('EmpanadasPollo')}
        onClick={() => handleStarClick(valor, 'EmpanadasPollo')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.EmpanadasPollo || '5'}</p>
  </div>
  {mensajes.EmpanadasPollo && <div className="mensaje-temporal">{mensajes.EmpanadasPollo}</div>}
  <div>
  <h3 className=' align-items-center'>empanadas de pollo</h3>
  <p className="price">$3.600</p>
  {/* <p>Musarela, jamon y tomate</p>  */}
  
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
<div className='menu-item EmpanadasCarne'>
<img src={ImagenEmpanadaPollo} alt="empanadas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.EmpanadasCarne >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'EmpanadasCarne')}
        onMouseOut={() => handleStarLeave('EmpanadasCarne')}
        onClick={() => handleStarClick(valor, 'EmpanadasCarne')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.EmpanadasCarne || '5'}</p>
  </div>
  {mensajes.EmpanadasCarne && <div className="mensaje-temporal">{mensajes.EmpanadasCarne}</div>}
  <div>
  <h3 className=' align-items-center'>Empanadas de carne</h3>
  <p className="price">$3.600</p>
  {/* <p>Musarela, jamon y tomate</p>  */}
  
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
</div>
      </div>
          );
          break;
          case 'Medialunas':
            content = (
              <div className="fondoDeLosPrecios">
          <div className="menu-container">
    <div className='menu-item MedialunaManteca'>
    <img src={ImagenMelialunaJyQ} alt="Medialunas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.MedialunaManteca >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'MedialunaManteca')}
        onMouseOut={() => handleStarLeave('MedialunaManteca')}
        onClick={() => handleStarClick(valor, 'MedialunaManteca')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.MedialunaManteca || '5'}</p>
  </div>
  {mensajes.MedialunaManteca && <div className="mensaje-temporal">{mensajes.MedialunaManteca}</div>}
  <div>
  <h3>Medialunas de manteca</h3>
  <p className="price">$500</p>
  {/* <p>Musarela, jamon y tomate</p>  */}
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
<div className='menu-item MedialunaJamonQueso'>
<img src={ImagenMelialunaJyQ} alt="Medialunas" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.MedialunaJamonQueso >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'MedialunaJamonQueso')}
        onMouseOut={() => handleStarLeave('MedialunaJamonQueso')}
        onClick={() => handleStarClick(valor, 'MedialunaJamonQueso')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.MedialunaJamonQueso || '5'}</p>
  </div>
  {mensajes.MedialunaJamonQueso && <div className="mensaje-temporal">{mensajes.MedialunaJamonQueso}</div>}
  <div>
  <h3>Medialunas de jamon y queso</h3>
  <p className="price">$900</p>
  {/* <p>Musarela, jamon y tomate</p>  */}
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
  </div>
        </div>
            );
            break;
            case 'Panchos':
              content = (
                <div className="fondoDeLosPrecios">
            <div className="menu-container">
      <div className='menu-item pancho'>
      
      <img src={ImagenPanchos} alt="Pancho" />
  <div className="rating">
    {[1, 2, 3, 4, 5].map((valor, index) => (
      <span
        key={index}
        className={`star ${votos.pancho >= valor ? 'votada' : ''}`}
        onMouseOver={() => handleStarHover(valor, 'pancho')}
        onMouseOut={() => handleStarLeave('pancho')}
        onClick={() => handleStarClick(valor, 'pancho')}
      >
        &#9733;
      </span>
    ))}
    <p className='porcentaje-valor-producto'>{votos.pancho || '5'}</p>
  </div>
  {mensajes.pancho && <div className="mensaje-temporal">{mensajes.pancho}</div>}
  <div>
  <p className='condimentos'>Aderezo y papas</p>
  <p className="price">$900</p>
      <a href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/la-cantina-de-stentor-c09912e6-97d3-4c85-b950-17bc1c730bda-menu?search=STENTOR" target="_blank" rel="noopener noreferrer"><button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button></a>
  </div>
</div>
    </div>
          </div>
              );
              break;
              case 'Tostados':
                content = (
                  <div className="fondoDeLosPrecios">
              <div className="menu-container">
        <div className="menu-item">
        <img src={ImagenTostadas} alt="Arabe" />
          <div>
            <h3>Tostado Arabe</h3>
             <p className='condimentos'>Jamon y queso</p>
            <p className="price">$800</p>
            <button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button>
          </div>
        </div>
        <div className="menu-item">
        <img src={ImagenTostadas} alt="Arabe" />
          <div>
            <h3>Tostado Arabe completo</h3>
             <p className='condimentos'>Jamon, queso, tomate, huevos revueltos</p>
            <p className="price">$1.600</p>
            <button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button>
          </div>
        </div>
      </div>
            </div>
                );
                break;

                case 'Bebidas':
                content = (
                  <div className="fondoDeLosPrecios">
              <div className="menu-container">
        <div className="menu-item">
          <img src="/src/assets/components/img/aquarius.webp" alt="Panchos" />
          <div>
            <h3>Aquarius de pera</h3>
             {/* <p>Aquarius de pera</p> */}
            <p className="price">$700</p>
            <button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button>
          </div>
        </div>
        <div className="menu-item">
          <img src="/src/assets/components/img/aquarius-manzana.webp" alt="Panchos" />
          <div>
            <h3>Aquarius de manzana</h3>
             {/* <p>Jamon y queso</p> */}
            <p className="price">$700</p>
            <button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button>
          </div>
        </div>
        <div className="menu-item">
          <img src="/src/assets/components/img/aquarius-pomelo.webp" alt="Panchos" />
          <div>
            <h3>Aquarius de pomelo</h3>
             {/* <p>Jamon y queso</p> */}
            <p className="price">$700</p>
            <button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button>
          </div>
        </div>

        <div className="menu-item">
          <img src="/src/assets/components/img/frappe.jpeg" alt="Panchos" />
          <div>
            <h3>FRAPPE</h3>
             {/* <p>Jamon y queso</p> */}
            <p className="price">$700</p>
            <button className='boton-verEnPedidosYa'>Ver en Pedidos Ya</button>
          </div>
        </div>
      </div>
            </div>
                );
                break;           
  }
  return (
   <div>
    <div id="MenuYhorarios" className='menu'>
      <div className='logos-menu text-center'>
      <button
  onClick={() => handleMenuItemClick('Pizzas')}
  className={`menu-button ${selectedMenu === 'Pizzas' ? 'selected' : ''}`}
>
  <FontAwesomeIcon icon={faPizzaSlice} className="iconos fa-icon" />
  <div className="menu-horario">
    PIZZAS
  </div>
</button>
  <button onClick={() => handleMenuItemClick('Hamburguesas')}
  className={`menu-button ${selectedMenu === 'Hamburguesas' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faBurger} className="iconos fa-burger" />
  <div className="menu-horario">
    HAMBURGUESAS
  </div>
</button>
<button
  onClick={() => handleMenuItemClick('Milanesas')}
  className={`menu-button ${selectedMenu === 'Milanesas' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faBacon} className="iconos fa-solid fa-bacon" />
  <div className="menu-horario">MILANESAS</div>
</button>
<button
  onClick={() => handleMenuItemClick('Empanadas')}
  className={`menu-button ${selectedMenu === 'Empanadas' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faCloud} className="iconos fa-solid fa-cloud" />
  <div className="menu-horario">EMPANADAS</div>
</button>
<button
  onClick={() => handleMenuItemClick('Medialunas')}
  className={`menu-button ${selectedMenu === 'Medialunas' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faCoins} className="iconos fa-solid fa-coins" />
  <div className="menu-horario">MEDIALUNAS</div>
</button>
<button
  onClick={() => handleMenuItemClick('Panchos')}
  className={`menu-button ${selectedMenu === 'Panchos' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faHotdog} className="iconos fa-solid fa-hotdog" />
  <div className="menu-horario">PANCHOS</div>
</button>
<button
  onClick={() => handleMenuItemClick('Tostados')}
  className={`menu-button ${selectedMenu === 'Tostados' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faBreadSlice} className="iconos fa-solid fa-bread-slice" />
  <div className="menu-horario">TOSTADOS</div>
</button>
<button
  onClick={() => handleMenuItemClick('Bebidas')}
  className={`menu-button ${selectedMenu === 'Bebidas' ? 'selected' : ''}`}>
  <FontAwesomeIcon icon={faWineBottle} className="iconos fa-solid fa-wine-bottle" />
  <div className="menu-horario">BEBIDAS</div>
</button>
      </div>
      <div>
        {content}
      </div>
    </div>
   </div>
  );
}
export default MenuSection;