import { useGetShoesQuery } from '../../services/apiCallShoes';
import ShoesDetail from '../ShoesDetail/ShoesDetail';
import Sidebar from '../Sidebar/Sidebar';
import './ShoeList.scss';

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
    <div className="shoelist">
      {' '}
      <Sidebar />
      <div className="shoelist__container">
        {' '}
        {shoes?.map((shoe) => (
          <ShoesDetail key={shoe._id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoesList;
