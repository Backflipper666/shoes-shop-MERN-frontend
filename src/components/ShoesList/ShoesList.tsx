import { useGetShoesQuery } from '../../services/apiCallShoes';
import ShoesDetail from '../ShoesDetail/ShoesDetail';
import Sidebar from '../Sidebar/Sidebar';
import './ShoeList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { shoesFetched, shoesRequestFailed } from '../../store/slices';
import { RootState } from '../../store/store'; // Import RootState and Shoe types
import { useEffect } from 'react';
import { Shoe } from '../../interfaces/shoe';

const ShoesList = () => {
  const { data: shoes, isLoading, isError } = useGetShoesQuery();

  const dispatch = useDispatch();
  const globalState = useSelector((state: RootState) => state); // Provide RootState type annotation
  const shoesToBeRendered: Shoe[] = (
    globalState.shoes as { shoesToBeRendered: Shoe[] }
  ).shoesToBeRendered; // Type assertion for shoesToBeRendered

  useEffect(() => {
    if (isError) {
      dispatch(shoesRequestFailed()); // Dispatch failure action without any parameters
    } else if (shoes) {
      dispatch(shoesFetched(shoes)); // Dispatch success action with fetched data
    }
  }, [dispatch, isError, shoes]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <div className="shoelist">
      <Sidebar />
      <div className="shoelist__container">
        {shoesToBeRendered.map((shoe) => (
          <ShoesDetail key={shoe._id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoesList;
