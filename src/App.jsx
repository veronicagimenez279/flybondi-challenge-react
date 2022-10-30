import { useEffect, useState } from 'react'
import ListaViajes from './components/ListaViajes'
import Texto from './components/Texto';
import Header from './components/Header';
import Carrusel from './components/Carrusel';
import Formulario from './components/Formulario';
import DATA from "./data/dataset.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    preciomaximo: 0,
    cantidadpasajeros: 0,
    fecha1: '',
    fecha2: ''
  })

  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState([])

  const { preciomaximo, cantidadpasajeros, fecha1, fecha2 } = busqueda


  useEffect(() => {
    const consultarJSON = async () => {

      const resultado = await (DATA.filter(x =>
        (x.price * cantidadpasajeros) <= preciomaximo &&
        cantidadpasajeros != 0 &&
        preciomaximo != 0 &&
        x.availability >= cantidadpasajeros &&
        x.data >= fecha1 &&
        x.data <= fecha2
      ));

      guardarResultado(resultado)

    }
    consultarJSON();
  }, [consultar])

  return (
    <>
      <Header />
      <Carrusel />
      <Texto />
      <Formulario
        busqueda={busqueda}
        guardarBusqueda={guardarBusqueda}
        guardarConsulta={guardarConsulta} />
      <ListaViajes
        resultado={resultado}
      />
    </>
  )
}

export default App
