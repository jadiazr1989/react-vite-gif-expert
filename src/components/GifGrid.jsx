
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ categories = [] }) => {
    return (
        <ol>
            {
                categories.map(category => (
                    <GifGridItem key={category} category={category} />
                ))
            }
        </ol>
    )
}

