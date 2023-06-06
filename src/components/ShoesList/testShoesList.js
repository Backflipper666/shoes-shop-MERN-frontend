import { useGetShoesQuery } from '../../services/apiCallShoes';
import ShoesDetail from '../ShoesDetail/ShoesDetail';

const ShoesList = () => {
  const { data: shoes, isLoading, isError } = useGetShoesQuery();
  console.log('tnh', shoes);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <div>
      <span>astalavista</span>
      <p>
        {' '}
        {shoes?.map((singleData) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(singleData.img.data.data))
          );
          return <img src={`data:image/png;base64,${base64String}`} />;
        })}
      </p>
    </div>
  );
};

export default ShoesList;
