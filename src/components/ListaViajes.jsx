import Viaje from "./Viaje";
import { v4 as uuidv4 } from 'uuid';

const ListaViajes = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null
    return (
        <center>
            <div className="w-1/2 lg:w-3/5 mx-5">
                <h2 className='mb-2'>Listado de Viajes</h2>

                {resultado.map(dato => (
                    <Viaje
                        key={uuidv4()}
                        dato={dato}
                    />
                ))
                }

            </div>
        </center>

    );
}

export default ListaViajes;