// ShoesList.tsx
import { useGetShoesQuery } from '../../services/apiCallShoes';
import ShoesDetail from '../ShoesDetail/ShoesDetail';
import Sidebar from '../Sidebar/Sidebar';
import './ShoeList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { shoesFetched, shoesRequestFailed } from '../../store/slices';
import { getAllUsers } from '../../store/users';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { Shoe, AllUsers } from '../../interfaces/shoe';
import { useGetUsersQuery } from '../../services/apiCallUsers';

const ShoesList = () => {
  const { data: shoes, isLoading, isError } = useGetShoesQuery();

  const {
    data: allUsersObj,
    isLoading: userLoading,
    isError: userError,
  } = useGetUsersQuery('s');

  let allUsers: AllUsers | null = null;
  if (allUsersObj) {
    const { allUsers: allUsersArr } = allUsersObj;
    allUsers = allUsersArr;
  }

  const dispatch = useDispatch();
  const globalState = useSelector((state: RootState) => state);
  const shoesToBeRendered: Shoe[] = (
    globalState.shoes as { shoesToBeRendered: Shoe[] }
  ).shoesToBeRendered;

  useEffect(() => {
    if (isError) {
      dispatch(shoesRequestFailed());
    } else if (shoes) {
      dispatch(shoesFetched(shoes));
    }

    if (allUsers) {
      dispatch(getAllUsers(allUsers));
    }
  }, [dispatch, isError, shoes, allUsers, allUsersObj]);

  if (isLoading || userLoading) {
    return <div>Loading...</div>;
  }
  if (isError || userError) {
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
