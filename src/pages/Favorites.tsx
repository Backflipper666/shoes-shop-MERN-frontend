//Favorites.tsx
import { useGetShoesQuery } from '../services/apiCallShoes';
import ShoesDetail from '../components/ShoesDetail/ShoesDetail';
import Sidebar from '../components/Sidebar/Sidebar';
import './pageStyles/Favorites.scss';
import { useDispatch, useSelector } from 'react-redux';
import { shoesFetched, shoesRequestFailed } from '../store/slices';
import { getAllUsers } from '../store/users';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { Shoe, AllUsers, User } from '../interfaces/shoe';
import { useGetUsersQuery } from '../services/apiCallUsers';
import { useNavigate, Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const allUsers: AllUsers[] | null = useSelector<RootState, AllUsers[] | null>(
    (state) => state.users.allUsers
  );
  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const user = useSelector<RootState, string | User | null>(
    (state) => state.users.user
  );

  const navigate = useNavigate();

  let userEmail: string = '';
  let currentUserFavoriteIds: string[];
  let userFavoritesArray: Shoe[] = [];
  if (typeof user === 'string') {
    userEmail = user;
  } else if (user && typeof user === 'object') {
    userEmail = user.email;
  }

  useEffect(() => {
    if (!user || !userEmail) {
      navigate('/login');
    }
  }, [user, userEmail, navigate]);

  if (user && userEmail) {
    currentUserFavoriteIds =
      allUsers?.filter((user) => user.email === userEmail)[0].favorites || [];

    for (let i = 0; i < currentUserFavoriteIds?.length; i++) {
      allShoes.forEach((shoe) => {
        if (shoe._id.toString() === currentUserFavoriteIds[i]) {
          userFavoritesArray.push(shoe);
        }
      });
    }
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

export default Favorites;
