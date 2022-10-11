import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './gifItem';

export const GifGrid = ({ category }) => {
    const { Image, isLoading } = useFetchGifs( category );
    


    
  return (
    <>
        <h3>{ category }</h3>

        {
            isLoading ? <h2>Cargando...</h2>
            : null
        }

        <div className='card-grid'>
            {
                Image.map( (peticion) =>
                    <GifItem
                    key={peticion.id}
                    {...peticion}
                    />
                )
            }
        </div>
    </>
  )
};
