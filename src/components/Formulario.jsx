import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react"

function Formulario({ busqueda, guardarBusqueda, guardarConsulta }) {


    // hook error
    const [error, guardarError] = useState(false)

    // extraer ciudad y el pais
    const { preciomaximo, cantidadpasajeros, fecha1, fecha2 } = busqueda

    // funcion que coloca los elementos en el state
    const handleChange = (e) => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario da un submit al formulario
    const handleSubmit = e => {
        e.preventDefault()

        // validar que esten todos los datos

        if (toString(preciomaximo).trim() === '0' || toString(cantidadpasajeros).trim() === '0' || fecha1.trim() === '' || fecha2.trim() === '') {
            guardarError(true)
            return
        }

        guardarError(false)

        guardarConsulta(true)

    }



    return (
        <Form onSubmit={handleSubmit}>

            {
                error ?
                    <center><Alert className='w-50' variant="danger">Todos los campos son obligatorios</Alert></center>
                    :
                    null


            }

            <Row className="mb-3 mx-5 justify-content-center">

                <Form.Group as={Col} sm={3}>
                    <Form.Label>Cantidad de pasajeros</Form.Label>

                    <Form.Control
                        id="cantidadpasajeros"
                        type="number"
                        placeholder="Cantidad de Pasajeros"
                        name="cantidadpasajeros"
                        value={cantidadpasajeros}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} sm={3}>

                    <Form.Label>Monto máximo</Form.Label>
                    <Form.Control
                        id="preciomaximo"
                        type="number"
                        placeholder="0"
                        name="preciomaximo"
                        value={preciomaximo}
                        onChange={handleChange}
                    />
                </Form.Group>

            </Row>

            <Row className="mx-5 justify-content-center">
                <Form.Group as={Col} sm={3}>
                    <Form.Label>Inicio período</Form.Label>
                    <Form.Control
                        id="fecha1"
                        type="date"
                        name="fecha1"
                        value={fecha1}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} sm={3}>
                    <Form.Label>Fin período</Form.Label>
                    <Form.Control
                        id="fecha2"
                        type="date"
                        name="fecha2"
                        value={fecha2}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>

            <center>

                <Button
                    className='mt-3 mb-3'
                    variant="info"
                    value="Buscar Destinos"
                    type="submit">
                    Enviar
                </Button>
            </center>
        </Form>
    );
}

export default Formulario;