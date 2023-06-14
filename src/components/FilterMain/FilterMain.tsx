import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState, ChangeEvent, useEffect } from 'react';
import {
  shoesFilteredOnSale,
  shoesFilteredByNewCollection,
} from '../../store/slices';

const FilterMain = () => {
  const [isOnSaleChecked, setIsOnSaleChecked] = useState(false);
  const [isNewCollectionChecked, setIsNewCollectionChecked] = useState(false);

  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOnSaleChecked && isNewCollectionChecked) {
      const filteredShoes = allShoes.filter(
        (shoe) => shoe.onSale && shoe.newCollection
      );
      dispatch(shoesFilteredByNewCollection(filteredShoes));
    } else if (isOnSaleChecked) {
      const filteredShoes = allShoes.filter((shoe) => shoe.onSale);
      dispatch(shoesFilteredOnSale(filteredShoes));
    } else if (isNewCollectionChecked) {
      const filteredShoes = allShoes.filter((shoe) => shoe.newCollection);
      dispatch(shoesFilteredByNewCollection(filteredShoes));
    } else {
      dispatch(shoesFilteredByNewCollection(allShoes));
    }
  }, [isOnSaleChecked, isNewCollectionChecked, allShoes, dispatch]);

  const handleOnSaleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOnSaleChecked(event.target.checked);
  };

  const handleNewCollectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsNewCollectionChecked(event.target.checked);
  };

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
          checked={isOnSaleChecked}
          onChange={handleOnSaleChange}
        />
        <label htmlFor="discountId" className="sidebar__form sidebar__label">
          Скидки
        </label>
        <span className="sidebar__number">22</span>
      </div>
      <div className="sidebar__form-wrapper">
        <input
          type="checkbox"
          name="newCollection"
          id="newCollectionId"
          className="sidebar__form sidebar__checkbox"
          checked={isNewCollectionChecked}
          onChange={handleNewCollectionChange}
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
