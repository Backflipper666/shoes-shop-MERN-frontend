import { Shoe } from '../../interfaces/shoe';

const ShoesDetail = ({ shoe }: { shoe: Shoe }) => {
  const { contentType, data } = shoe.image || {};

  if (contentType && data?.type === 'Buffer' && Array.isArray(data?.data)) {
    // Convert the number array to a Uint8Array
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(shoe.image.data.data))
    );
    String.fromCharCode(...new Uint8Array(shoe.image.data.data));

    // Convert the Uint8Array image data to a base64-encoded string

    return (
      <div>
        <h3>{shoe.title}</h3>
        <img src={`data:image/png;base64,${base64String}`} />
      </div>
    );
  }

  return <div>Image not available</div>;
};

export default ShoesDetail;
