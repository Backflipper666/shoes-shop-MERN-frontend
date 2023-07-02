//FilterMain.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ChangeEvent, useEffect } from 'react';
import {
  shoesFilteredOnSale,
  shoesFilteredByNewCollection,
  setIsOnSaleChecked,
  setIsNewCollectionChecked,
} from '../../store/slices';
import { countShoesOnSale, countNewCollection } from '../../utils/utils';

const FilterMain = () => {
  const isOnSaleChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isOnSaleChecked
  );
  const isNewCollectionChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isNewCollectionChecked
  );

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
    const checked = event.target.checked;
    dispatch(setIsOnSaleChecked(checked));
  };

  const handleNewCollectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsNewCollectionChecked(checked));
  };

  return (
    <div className="sidebar__filter sidebar__filter-container">
      <div className="sidebar__header-container">
        <h4 className="sidebar__header">Фильтр</h4>
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
        <span className="sidebar__number">{countShoesOnSale(allShoes)}</span>
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
        <span className="sidebar__number">{countNewCollection(allShoes)}</span>
      </div>
    </div>
  );
};

export default FilterMain;
