import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import  {useState} from 'react';
import tarjeta from './imagenes/tarjeta.jpg'

function App() {

  const [numClics, setNumClics] = useState(0)

  const manejarclic= () => {
    setNumClics(numClics+1);
  }

    const reiniciarcontador = () => {
      setNumClics(0);
   

  }

  return (
   <div className='App'>
  <div className= 'freecodecamp-logo-contenedor'>
     <img
     className='freecodecamp-logo'
     src={freecodecamplogo}
     alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>

      <Contador numClics={numClics} />
      <Boton 
      texto='Clic'
      esbotondeclic={false}
      manejarclic={manejarclic}/>

      <Boton
      texto='Reiniciar'
      esbotondeclic={false}
      manejarclic={reiniciarcontador} />

      <img
     className='tarjeta'
     src={tarjeta}
     alt='logo de tarjeta'/>
      
      </div>
      </div>
    );
  }

export default App;
