//Favorites.tsx
import { useGetShoesQuery } from '../../services/apiCallShoes';
import ShoesDetail from '../../components/ShoesDetail/ShoesDetail';
import Sidebar from '../../components/Sidebar/Sidebar';
import './pageStyles/Favorites.scss';
import { useDispatch, useSelector } from 'react-redux';
import { shoesFetched, shoesRequestFailed } from '../../store/slices';
import { getAllUsers } from '../../store/users';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { Shoe, AllUsers, User } from '../../interfaces/shoe';
import { useGetUsersQuery } from '../../services/apiCallUsers';
import ShoesItem from '../ShoesItem/ShoesItem';
import { Link } from 'react-router-dom';

const ShoesItemList: React.FC = () => {
  const allUsers: AllUsers[] | null = useSelector<RootState, AllUsers[] | null>(
    (state) => state.users.allUsers
  );
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const user = useSelector<RootState, string | User | null>(
    (state) => state.users.user
  );

  let userEmail: string = '';
  if (typeof user === 'string') {
    userEmail = user;
  } else if (user && typeof user === 'object') {
    userEmail = user.email;
  }

  const currentUserFavoriteIds =
    allUsers?.filter((user) => user.email === userEmail)[0].favorites || [];

  let userFavoritesArray: Shoe[] = [];
  for (let i = 0; i < currentUserFavoriteIds?.length; i++) {
    allShoes.forEach((shoe) => {
      if (shoe._id.toString() === currentUserFavoriteIds[i]) {
        userFavoritesArray.push(shoe);
      }
    });
  }

  const dispatch = useDispatch();
  const globalState = useSelector((state: RootState) => state);

  return (
    <div className="shoelist">
      <Sidebar />
      <div className="shoelist__container">
        {userFavoritesArray.map((shoe) => (
          <ShoesDetail key={shoe._id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoesItemList;