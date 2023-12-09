import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading}  = useFetchGifs(category);
  console.log('isLoading', isLoading)
  return (
    <>
        <h1>{category}</h1>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {images.map(img => (<GifItem key={img.id} {...img}/>))}
        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
};
