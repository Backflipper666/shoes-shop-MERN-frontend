import { Shoe } from '../../interfaces/shoe';
import nextId from 'react-id-generator';

const ShoesDetail = ({ shoe }: { shoe: Shoe }) => {
  const images = [];
  if (shoe.image2) images.push(shoe.image2);
  if (shoe.image3) images.push(shoe.image3);
  if (shoe.image4) images.push(shoe.image4);

  const { contentType, data } = shoe.image || {};

  if (contentType && data?.type === 'Buffer' && Array.isArray(data?.data)) {
    // Convert the number array to a Uint8Array
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(shoe.image.data.data))
    );

    // Convert the Uint8Array image data to a base64-encoded string

    return (
      <div>
        <h3>{shoe.title}</h3>
        <img src={`data:image/png;base64,${base64String}`} width="300px" />
        {images.map((i) => {
          const htmlId = nextId();
          const str = btoa(String.fromCharCode(...new Uint8Array(i.data.data)));
          return (
            <img
              src={`data:image/png;base64,${str}`}
              width="300px"
              key={htmlId}
            />
          );
        })}
      </div>
    );
  }

  return <div>Image not available</div>;
};

export default ShoesDetail;
