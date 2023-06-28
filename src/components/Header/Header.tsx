//Header.tsx
import './Header.scss';
import searchIcon from '../../assets/images/search-icon.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutUser } from '../../store/users';
import { loginUser as loginUserAction } from '../../store/users';
import { useEffect } from 'react';
import { User } from '../../interfaces/shoe';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      // Handle the parsedUser object
      dispatch(loginUserAction(parsedUser));
    }
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.user);
  let email: string | null = null;
  if (user) {
    email = Object.values(user)[0];
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logoutUser({}));
  };
  return (
    <nav className="header__outer-wrapper">
      <div className="header__left-wrapper">
        <h3 className="header__title">STEP STREET</h3>{' '}
        <button className="header__link">МУЖЧИНАМ</button>
        <button className="header__link">ЖЕНЩИНАМ</button>{' '}
      </div>
      <div className="header__right-wrapper">
        <p className="header__link">{email}</p>
        <img src={searchIcon} alt="search icon" className="header__search" />
        <button
          className="header__link header__link-auth header__link-yellow"
          onClick={() => navigate('/favorites')}
        >
          ИЗБРАННОЕ
        </button>

        {user ? (
          <button
            className="header__link header__link-auth header__link-yellow"
            onClick={handleLogout}
          >
            ВЫЙТИ
          </button>
        ) : (
          <Link to="/login">
            <button className="header__link header__link-auth header__link-yellow">
              ВОЙТИ
            </button>
          </Link>
        )}

        <button className="header__link header__link-cart header__link-yellow">
          КОРЗИНА
        </button>
      </div>
    </nav>
  );
};

export default Header;
