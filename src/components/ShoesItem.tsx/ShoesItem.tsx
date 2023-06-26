import { Shoe } from '../../interfaces/shoe';
import nextId from 'react-id-generator';
import { useState } from 'react';
import { truncateString } from '../../utils/utils';

const ShoesItem = ({ shoe }: { shoe: Shoe }) => {
  return (
    <div className="card">
      {/* Display the first image */}
      <img
        src={`data:${shoe.image.contentType};base64,${shoe.image.data}`}
        width="300px"
        className="card__image-first"
        alt={shoe.title}
      />
      {/* Display the second image */}
      <img
        src={`data:${shoe.image2?.contentType};base64,${shoe.image2?.data}`}
        width="300px"
        className="card__image-second"
        alt={shoe.title}
      />{' '}
      <img
        src={`data:${shoe.image3?.contentType};base64,${shoe.image3?.data}`}
        width="300px"
        className="card__image-second"
        alt={shoe.title}
      />{' '}
      <img
        src={`data:${shoe.image4?.contentType};base64,${shoe.image4?.data}`}
        width="300px"
        className="card__image-second"
        alt={shoe.title}
      />
    </div>
  );
};

export default ShoesItem;
