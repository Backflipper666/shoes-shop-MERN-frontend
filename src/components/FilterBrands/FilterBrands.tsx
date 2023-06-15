//FilterBrands.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState, ChangeEvent, useEffect } from 'react';
import {
  shoesFilteredOnSale,
  shoesFilteredByNewCollection,
  setIsOnSaleChecked,
  setIsNewCollectionChecked,
  setShoesToBeRendered,
  setIsNikeChecked,
  setIsPumaChecked,
} from '../../store/slices';

const FilterBrands = () => {
  const isOnSaleChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isOnSaleChecked
  );
  const isNewCollectionChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isNewCollectionChecked
  );
  const isNikeChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isNikeChecked
  );
  const isPumaChecked = useSelector(
    (state: RootState) => state.shoes.checkedFields.isPumaChecked
  );

  const allShoes = useSelector((state: RootState) => state.shoes.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterShoes = () => {
      let filteredShoes = allShoes;

      if (isOnSaleChecked) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.onSale);
      }

      if (isNewCollectionChecked) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.newCollection);
      }

      if (isNikeChecked && !isPumaChecked) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Nike');
      }

      if (!isNikeChecked && isPumaChecked) {
        filteredShoes = filteredShoes.filter((shoe) => shoe.brand === 'Puma');
      }
      if (isNikeChecked && isPumaChecked) {
        filteredShoes = filteredShoes.filter(
          (shoe) => shoe.brand === 'Nike' || shoe.brand === 'Puma'
        );
      }

      dispatch(setShoesToBeRendered(filteredShoes));
    };

    filterShoes();
  }, [
    isOnSaleChecked,
    isNewCollectionChecked,
    isNikeChecked,
    isPumaChecked,
    allShoes,
    dispatch,
  ]);

  const handlePumaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsPumaChecked(checked));
  };

  const handleNikeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    dispatch(setIsNikeChecked(checked));
  };

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
          checked={isNikeChecked}
          onChange={handleNikeChange}
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
          checked={isPumaChecked}
          onChange={handlePumaChange}
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
