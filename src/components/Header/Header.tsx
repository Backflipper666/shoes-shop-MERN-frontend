import './Header.scss';

const Header = () => {
  return (
    <div className="header__outer-wrapper">
      <div className="header__left-wrapper">
        <h3>STEP STREET</h3>
        <button>МУЖЧИНАМ</button>
        <button>ЖЕНЩИНАМ</button>
      </div>
      <div className="header__right-wrapper">
        <a href="">ВОЙТИ</a>
        <button>КОРЗИНА</button>
      </div>
    </div>
  );
};

export default Header;
