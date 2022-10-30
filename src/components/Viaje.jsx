import Card from 'react-bootstrap/Card';


const Viaje = ({ dato }) => {
  return (
    <Card className='mb-2 border-bottom' style={{ width: '18rem' }}>
      <Card.Body className='mb-3 mt-3'>
        <Card.Title>{dato.origin} a {dato.destination}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{dato.data}</Card.Subtitle>
        <Card.Text className='mb-0'>
          Disponibilidad: {dato.availability}
        </Card.Text>
        <Card.Text>
          Precio unitario: ${dato.price}
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default Viaje;