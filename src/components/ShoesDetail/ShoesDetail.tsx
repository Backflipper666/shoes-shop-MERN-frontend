import { Shoe } from '../../interfaces/shoe';
import nextId from 'react-id-generator';
import './ShoesDetail.scss';
import { useState } from 'react';
import { truncateString } from '../../utils/utils';

const ShoesDetail = ({ shoe }: { shoe: Shoe }) => {
  const [currentImage, setCurrentImage] = useState(
    btoa(String.fromCharCode(...new Uint8Array(shoe.image.data.data)))
  );

  const images = [];
  if (shoe.image2) images.push(shoe.image2);
  if (shoe.image3) images.push(shoe.image3);
  if (shoe.image4) images.push(shoe.image4);

  const handleMouseEnter = (image: string) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    const { contentType, data } = shoe.image || {};
    if (contentType && data?.type === 'Buffer' && Array.isArray(data?.data)) {
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(shoe.image.data.data))
      );
      setCurrentImage(base64String);
    }
  };

  const { contentType, data } = shoe.image || {};

  if (contentType && data?.type === 'Buffer' && Array.isArray(data?.data)) {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(shoe.image.data.data))
    );

    const base64StringImg2 = shoe.image2
      ? btoa(String.fromCharCode(...new Uint8Array(shoe.image2.data.data)))
      : '';

    const base64StringImg3 = shoe.image3
      ? btoa(String.fromCharCode(...new Uint8Array(shoe.image3.data.data)))
      : '';

    const base64StringImg4 = shoe.image4
      ? btoa(String.fromCharCode(...new Uint8Array(shoe.image4.data.data)))
      : '';

    return (
      <div className="card">
        <div className="card__wrapper">
          <div className="card__span-wrapper">
            <span className="card__indicator card__indicator-1"></span>
            <span
              className="card__indicator card__indicator-2"
              onMouseEnter={() => handleMouseEnter(base64StringImg2)}
              onMouseLeave={handleMouseLeave}
            ></span>
            <span
              className="card__indicator card__indicator-3"
              onMouseEnter={() => handleMouseEnter(base64StringImg3)}
              onMouseLeave={handleMouseLeave}
            ></span>
            <span
              className="card__indicator card__indicator-4"
              onMouseEnter={() => handleMouseEnter(base64StringImg4)}
              onMouseLeave={handleMouseLeave}
            ></span>
          </div>
          {shoe.newCollection && (
            <p className="card__ad card__promotion">NEW</p>
          )}
          {shoe.onSale && (
            <p className="card__discount card__promotion">
              -{shoe.discountPercent}%
            </p>
          )}
          <span className="card__heart"></span>
          <img
            src={`data:image/png;base64,${currentImage}`}
            width="300px"
            className="card__image-first"
            alt={shoe.title}
          />
          <h3>{shoe.title}</h3>
          <p className="card__description">
            {truncateString(shoe.description)}
          </p>
          <p className="card__price">{shoe.price} ₸</p>
        </div>
      </div>
    );
  }

  return <div>Image not available</div>;
};

export default ShoesDetail;
