const FilterMain = () => {
  return (
    <div className="sidebar__filter sidebar__filter-container">
      <div className="sidebar__header-container">
        <h4 className="sidebar__header">Фильтр</h4>
        <button className="sidebar__button">свернуть</button>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="discount"
          id="discountId"
          className="sidebar__form sidebar__checkbox"
        />
        <label htmlFor="discountId" className="sidebar__form sidebar__label">
          Скидки
        </label>{' '}
        <span className="sidebar__number">22</span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="newCollection"
          id="newCollectionId"
          className="sidebar__form sidebar__checkbox"
        />
        <label
          htmlFor="newCollectionId"
          className="sidebar__form sidebar__label"
        >
          Новая коллекция
        </label>
        <span className="sidebar__number">22</span>
      </div>
    </div>
  );
};

export default FilterMain;
