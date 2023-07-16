//ShoeDetail.tsx
import { Shoe, User, AllUsers } from '../../interfaces/shoe';
import { RootState } from '../../store/store';
import './ShoesDetail.scss';
import { useEffect, useState } from 'react';
import { truncateString, replaceMediaWithStaticFiles } from '../../utils/utils';
import { Image } from '../../interfaces/shoe';
import { useSelector } from 'react-redux';
import { useAddToFavoritesMutation } from '../../services/apiCallAddToFavorites';
import { useRemoveFromFavoritesMutation } from '../../services/apiCallRemoveFromFavorites';
import { useNavigate, Link } from 'react-router-dom';

const ShoesDetail = ({ shoe }: { shoe: Shoe }) => {
  const imageUrl: string = replaceMediaWithStaticFiles(shoe.image);
  const image2Url: string = replaceMediaWithStaticFiles(shoe.image2);
  const image3Url: string = replaceMediaWithStaticFiles(shoe.image3);
  const image4Url: string = replaceMediaWithStaticFiles(shoe.image4);

  const [addToFavorites, { isLoading, isError }] = useAddToFavoritesMutation();
  const [removeFromFavorites] = useRemoveFromFavoritesMutation();
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const navigate = useNavigate();
  const user = useSelector<RootState, string | User | null>(
    (state) => state.users.user
  );
  const allUsers: AllUsers[] | null = useSelector<RootState, AllUsers[] | null>(
    (state) => state.users.allUsers
  );

  let userEmail: string = '';
  if (typeof user === 'string') {
    userEmail = user;
  } else if (user && typeof user === 'object') {
    userEmail = user.email;
  }

  const authenticatedUser = allUsers?.filter(
    (user) => user.email === userEmail
  )[0];

  const favorites: string[] | undefined = authenticatedUser?.favorites || [];

  const isItReallyFavorite = favorites.includes(shoe.id.toString());
  const [isFavorite, setIsFavorite] = useState<boolean>(isItReallyFavorite);

  const handleMouseEnter = (image: string) => {
    if (image) {
      setCurrentImage(image);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(imageUrl);
  };

  let userToken: string | null = null;
  if (typeof user === 'string') {
    userToken = user;
  } else if (user && typeof user === 'object') {
    userToken = user.token;
  }

  const handleAddToFavorites = async () => {
    if (!user) {
      return navigate('/login');
    }
    try {
      if (!isFavorite) {
        const result = await addToFavorites({
          email: userEmail,
          shoeId: shoe.id,
          token: userToken,
        });
        setIsFavorite(true);
      } else {
        const result = await removeFromFavorites({
          email: userEmail,
          shoeId: shoe.id,
          token: userToken,
        });
        setIsFavorite(false);
      }
    } catch (error) {
      throw new Error('an error occurred');
    }
  };

  return (
    <div className="card">
      <div className="card__wrapper">
        <div
          className="card__span-wrapper"
          onClick={() => navigate(`/${shoe.id}`)}
        >
          <span className="card__indicator card__indicator-1"></span>
          <span
            className="card__indicator card__indicator-2"
            onMouseEnter={() => handleMouseEnter(image2Url)}
            onMouseLeave={handleMouseLeave}
          ></span>
          <span
            className="card__indicator card__indicator-3"
            onMouseEnter={() => handleMouseEnter(image3Url)}
            onMouseLeave={handleMouseLeave}
          ></span>
          <span
            className="card__indicator card__indicator-4"
            onMouseEnter={() => handleMouseEnter(image4Url)}
            onMouseLeave={handleMouseLeave}
          ></span>
        </div>
        {shoe.newCollection && <p className="card__ad card__promotion">NEW</p>}
        {shoe.onSale && (
          <p className="card__discount card__promotion">
            -{shoe.discountPercent}%
          </p>
        )}
        <span
          className={isFavorite ? 'card__heart-red' : 'card__heart'}
          onClick={handleAddToFavorites}
        ></span>
        <img
          src={`http://127.0.0.1:8000/${currentImage}`}
          width="300px"
          className="card__image-first"
          alt={shoe.title}
        />
        <h3>{shoe.title}</h3>
        <p className="card__description">{truncateString(shoe.description)}</p>
        <p className="card__price">{shoe.price} ₸</p>
      </div>
    </div>
  );
};

export default ShoesDetail;

/* const ShoesDetail = () => {
  return <div></div>;
};
export default ShoesDetail; */
