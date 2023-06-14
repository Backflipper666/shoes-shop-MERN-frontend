const FilterBrands = () => {
  return (
    <div className="sidebar__brand sidebar__filter-container">
      <div className="sidebar__header-container">
        <h4 className="sidebar__header sidebar__brand-header">Бренд</h4>
        <button className="sidebar__button sidebar__button-dropdown"></button>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="adidas"
          id="adidasId"
          className="sidebar__form sidebar__checkbox"
        />
        <label htmlFor="adidasId" className="sidebar__form sidebar__label">
          Adidas
        </label>
        <span className="sidebar__number">22</span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="nike"
          id="nikeId"
          className="sidebar__form sidebar__checkbox"
        />
        <label htmlFor="nikeId" className="sidebar__form sidebar__label">
          Nike
        </label>
        <span className="sidebar__number">22</span>
      </div>

      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="puma"
          id="pumaId"
          className="sidebar__form sidebar__checkbox"
        />
        <label htmlFor="pumaId" className="sidebar__form sidebar__label">
          Puma
        </label>
        <span className="sidebar__number">22</span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="newBalance"
          id="newBalanceId"
          className="sidebar__form sidebar__checkbox"
        />
        <label htmlFor="newBalanceId" className="sidebar__form sidebar__label">
          New Balance
        </label>
        <span className="sidebar__number">12</span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="fila"
          id="filaId"
          className="sidebar__form sidebar__checkbox"
        />
        <label htmlFor="filaId" className="sidebar__form sidebar__label">
          FILA
        </label>
        <span className="sidebar__number">20</span>
      </div>
      <button className="sidebar__show-more-button">Показать ещё</button>
    </div>
  );
};

export default FilterBrands;
