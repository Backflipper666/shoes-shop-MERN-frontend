import { Shoe } from '../../interfaces/shoe';
import { RootState } from '../../store/store';
import './ShoesDetail.scss';
import { useState } from 'react';
import { truncateString } from '../../utils/utils';
import { Image } from '../../interfaces/shoe';
import { useDispatch, useSelector } from 'react-redux';

interface User {
  email: string;
  token: string;
}

const ShoesDetail = ({ shoe }: { shoe: Shoe }) => {
  const [currentImage, setCurrentImage] = useState<Image>(shoe.image);
  const user = useSelector<RootState, string | User | null>(
    (state) => state.users.user
  );

  const handleMouseEnter = (image?: Image) => {
    if (image) {
      setCurrentImage(image);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(shoe.image);
  };

  const addToFavorites = () => {};

  let userEmail: string | null = null;
  if (typeof user === 'string') {
    userEmail = user;
  } else if (user && typeof user === 'object') {
    userEmail = user.email;
  }

  console.log('userEmail is: ', userEmail);

  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__span-wrapper">
          <span className="card__indicator card__indicator-1"></span>
          <span
            className="card__indicator card__indicator-2"
            onMouseEnter={() => handleMouseEnter(shoe.image2)}
            onMouseLeave={handleMouseLeave}
          ></span>
          <span
            className="card__indicator card__indicator-3"
            onMouseEnter={() => handleMouseEnter(shoe.image3)}
            onMouseLeave={handleMouseLeave}
          ></span>
          <span
            className="card__indicator card__indicator-4"
            onMouseEnter={() => handleMouseEnter(shoe.image4)}
            onMouseLeave={handleMouseLeave}
          ></span>
        </div>
        {shoe.newCollection && <p className="card__ad card__promotion">NEW</p>}
        {shoe.onSale && (
          <p className="card__discount card__promotion">
            -{shoe.discountPercent}%
          </p>
        )}

        <span className="card__heart"></span>

        <img
          src={`data:${currentImage.contentType};base64,${currentImage.data}`}
          width="300px"
          className="card__image-first"
          alt={shoe.title}
        />
        <h3>{shoe.title}</h3>
        <p className="card__description">{truncateString(shoe.description)}</p>
        <p className="card__price">{shoe.price} ₸</p>

        {userEmail && <p>User email: {userEmail}</p>}
      </div>
    </div>
  );
};

export default ShoesDetail;
