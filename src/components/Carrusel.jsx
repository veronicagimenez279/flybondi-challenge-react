import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
    return (
        <Carousel variant="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/TfwNftWm/puente-del-inca.png"
                    alt="Puente del Inca"
                />
                <Carousel.Caption>
                    <h1>Monumento natural Puente del Inca</h1>
                    <p>Puente del Inca, Mendoza</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/YMSTnrr1/cataratas-iguazu.png"
                    alt="Cataratas del iguazu"
                />
                <Carousel.Caption>
                    <h1>Cataratas del Iguazú</h1>
                    <p>Puerto Iguazú, Misiones</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/6wcDf2XW/las-grutas.png"
                    alt="Las Grutas"
                />
                <Carousel.Caption>
                    <h1>Las Grutas</h1>
                    <p>
                        San Antonio Oeste, Río Negro
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;