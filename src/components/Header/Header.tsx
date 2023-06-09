import './Header.scss';
import searchIcon from '../../assets/images/search-icon.svg';
const Header = () => {
  return (
    <div className="header__outer-wrapper">
      <div className="header__left-wrapper">
        <h3 className="header__title">STEP STREET</h3>{' '}
        <a href="" className="header__link">
          МУЖЧИНАМ
        </a>
     
        <a href="" className="header__link">
          ЖЕНЩИНАМ
        </a>{' '}
      </div>
      <div className="header__right-wrapper">
        <img src={searchIcon} alt="search icon" className="header__search" />
        <a href="" className="header__link header__link-auth header__link-yellow">
          ВОЙТИ
        </a>
        <button className="header__link header__link-cart header__link-yellow">КОРЗИНА</button>
      </div>
    </div>
  );
};

export default Header;
