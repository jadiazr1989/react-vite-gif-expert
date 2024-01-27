import { GifImageItem } from './GifImageItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGridItem = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {isLoading && (<h2>Loading...</h2>)}
            <div className='card-grid'>
                {images.map(image => (
                    <GifImageItem key={image.id} {...image} />
                ))}
            </div>
        </div>
    )
}
