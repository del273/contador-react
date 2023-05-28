import React from 'react'
import '../hojas-de-estilos/Boton.css'

function Boton({texto,esbotondeclic,manejarclic}) {
  return (
		<button
     className={esbotondeclic ? 'boton-clic': 'boton-reiniciar'}
     onClick={manejarclic}>


     {texto}
		</button>


	);

}

export default Boton;