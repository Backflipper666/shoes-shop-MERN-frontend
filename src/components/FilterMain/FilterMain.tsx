import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store'; // Import RootState and Shoe types
import { Shoe } from '../../interfaces/shoe';
import { useState, ChangeEvent } from 'react';
import {
  shoesRequested,
  shoesFetched,
  shoesRequestFailed,
  shoesFilteredOnSale,
} from '../../store/slices';

const FilterMain = () => {
  const [isOnSaleChecked, setIsOnSaleChecked] = useState(false);

  const globalState = useSelector((state: RootState) => state); // Provide RootState type annotation
  console.log('global state iss: ', globalState);
  const allShoes = globalState.shoes.list;
  console.log('allShoes is: ', allShoes);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const shoesOnSale = allShoes.filter((shoe) => shoe.onSale);
    console.log('shoes on saaaale', shoesOnSale);
    setIsOnSaleChecked(!isOnSaleChecked);
    if (!isOnSaleChecked) {
      dispatch(shoesFilteredOnSale(shoesOnSale));
    } else if (isOnSaleChecked) {
      dispatch(shoesFilteredOnSale(allShoes));
    }
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
          onChange={handleCheckboxChange}
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
