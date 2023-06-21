//Header.tsx
import './Header.scss';
import searchIcon from '../../assets/images/search-icon.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutUser } from '../../store/users';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.user);

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
        <img src={searchIcon} alt="search icon" className="header__search" />

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
