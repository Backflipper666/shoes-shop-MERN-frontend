import { Shoe } from '../../interfaces/shoe';
import nextId from 'react-id-generator';
import './ShoesDetail.scss';
import { useState } from 'react';
const ShoesDetail = ({ shoe }: { shoe: Shoe }) => {
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    btoa(String.fromCharCode(...new Uint8Array(shoe.image.data.data)))
  );

  const images = [];
  // images.push(shoe.image);
  if (shoe.image2) images.push(shoe.image2);
  if (shoe.image3) images.push(shoe.image3);
  if (shoe.image4) images.push(shoe.image4);

  const handleMouseEnter2ndImage = (image: any) => {
    setCurrentImage(image);
  };

  const handleMouseLeave2ndImg = (image: any) => {
    setCurrentImage(image);
  };

  const { contentType, data } = shoe.image || {};

  if (contentType && data?.type === 'Buffer' && Array.isArray(data?.data)) {
    // Convert the number array to a Uint8Array
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(shoe.image.data.data))
    );

    const base64StringImg2 = shoe.image2
      ? btoa(String.fromCharCode(...new Uint8Array(shoe.image2.data.data)))
      : '';

    // Convert the Uint8Array image data to a base64-encoded string

    return (
      <div className="card">
        <div className="card__wrapper">
          <div className="card__span-wrapper">
            {' '}
            <span className="card__indicator card__indicator-1"></span>
            <span
              className="card__indicator card__indicator-2"
              onMouseEnter={() => handleMouseEnter2ndImage(base64StringImg2)}
              onMouseLeave={() => handleMouseLeave2ndImg(base64String)}
            ></span>
            <span className="card__indicator card__indicator-3"></span>
            <span className="card__indicator card__indicator-4"></span>
          </div>
          <p className="card__ad card__promotion">NEW</p>
          <p className="card__discount card__promotion">-20 %</p>
          <span className="card__heart"></span>
          <img
            src={`data:image/png;base64,${currentImage}`}
            width="300px"
            className="card__image-first"
          />
          {/*           {images.map((i) => {
            const htmlId = nextId();
            const str = btoa(
              String.fromCharCode(...new Uint8Array(i.data.data))
            );
            return (
              <img
                src={`data:image/png;base64,${str}`}
                width="300px"
                key={htmlId}
              />
            );
          })} */}{' '}
          <h3>{shoe.title}</h3>
          <p className="card__description">Мужские кроссовки</p>
          <p className="card__price">12 000 ₸</p>
        </div>
      </div>
    );
  }

  return <div>Image not available</div>;
};

export default ShoesDetail;
