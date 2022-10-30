import Card from 'react-bootstrap/Card';

function Texto() {
    return (
        <Card border="light" className="text-center">

            <Card.Body>
                <Card.Title> <h2> Consultá la disponibilidad</h2></Card.Title>
                <Card.Text className='mb-0'>
                    Solamente ingresá la cantidad de pasajeros que viajan, el monto máximo que podés pagar
                </Card.Text>
                <Card.Text>
                    y el período en el que te gustaría viajar y mirá todos los destinos posibles.
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default Texto;