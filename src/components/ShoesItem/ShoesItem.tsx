//ShoesItem.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import './ShoesItem.scss';

const ShoesItem: React.FC = () => {
  const { id } = useParams();
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const shoe = allShoes.filter((shoe) => shoe._id.toString() === id)[0];

  return (
    <div className="shoes-item">
      <div className="shoes-item__wrapper">
        <h1 className="shoes-item__title">{shoe.title}</h1>
        <div className="shoes-item__images">
          <img
            className="shoes-item__image"
            src={`data:${shoe.image.contentType};base64,${shoe.image.data}`}
            width="300px"
            alt={shoe.title}
          />
          <img
            className="shoes-item__image"
            src={`data:${shoe.image2?.contentType};base64,${shoe.image2?.data}`}
            width="300px"
            alt={shoe.title}
          />
          <img
            className="shoes-item__image"
            src={`data:${shoe.image3?.contentType};base64,${shoe.image3?.data}`}
            width="300px"
            alt={shoe.title}
          />
          <img
            className="shoes-item__image"
            src={`data:${shoe.image4?.contentType};base64,${shoe.image4?.data}`}
            width="300px"
            alt={shoe.title}
          />
        </div>
        <p className="shoes-item__brand">{shoe.brand}</p>
        <p className="shoes-item__description">{shoe.description}</p>
        <p className="shoes-item__color">{shoe.color}</p>

        <p className="shoes-item__price">{shoe.price}</p>
        <p className="shoes-item__material">{shoe.material}</p>
        <p className="shoes-item__season">{shoe.season}</p>
        <p className="shoes-item__size">{shoe.size}</p>
      </div>
    </div>
  );
};

export default ShoesItem;
