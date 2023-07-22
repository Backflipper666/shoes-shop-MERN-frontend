// AdminShoes.tsx
import { useGetShoesQuery } from '../services/apiCallShoes';
import ShoesDetail from '../components/ShoesDetail/ShoesDetail';
import AdminShoesDetail from '../components/AdminShoesDetail/AdminShoesDetail';
import Sidebar from '../components/Sidebar/Sidebar';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { shoesFetched, shoesRequestFailed } from '../store/slices';
import { getAllUsers } from '../store/users';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { Shoe, AllUsers } from '../interfaces/shoe';
import { useGetUsersQuery } from '../services/apiCallUsers';
import Spinner from '../components/Spinner/Spinner';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link, useNavigate } from 'react-router-dom';

const AdminShoesList = () => {
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
  }, [dispatch, isError, shoes, allUsers, allUsersObj, isLoading]);

  if (isLoading || userLoading) {
    return <div className="shoelist__spinner">{<Spinner></Spinner>}</div>;
  }
  if (isError || userError) {
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <div className="shoelist">
      <Sidebar />
      <div className="shoelist__container">
        <Space wrap>
          <Link to="/admin/shoes/create">
            <Button type="primary">
              <AddOutlinedIcon /> Создать новую
            </Button>
          </Link>
        </Space>
        {shoesToBeRendered.map((shoe) => (
          <AdminShoesDetail key={shoe._id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default AdminShoesList;
